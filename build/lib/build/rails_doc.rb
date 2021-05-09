# frozen_string_literal: true

module Build
  class RailsDoc
    EXTENSION_JS_PATH = '/Users/philiplambok/Codes/code/vscode-rails-docs/extension.js'
    PACKAGE_JSON_PATH = '/Users/philiplambok/Codes/code/vscode-rails-docs/package.json'

    def initialize; end

    def gsub_file(path, from, to)
      content = File.binread(path)
      to_final = "#{from}\n#{to}"
      content.gsub!(from, to_final)
      File.open(path, 'wb') { |file| file.write(content) }
    end

    def create_ext_command(variable, command, url)
      "  let #{variable} = vscode.commands.registerCommand('#{command}', ()=> {\n" +
        "    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('#{url}'));\n" +
        "  })\n" +
        "  context.subscriptions.push(#{variable});\n"
    end

    def call
      dirs = Dir.glob("#{ENV['RAILS_DOC_PATH']}/**/*")
      class_paths = []
      dirs.each do |dir|
        class_paths.push(dir) if dir.include?('classes/')
      end
      classes = []
      class_paths.each do |path|
        path_array = path.split('classes/')
        class_name = path_array[1]
        class_name.slice!('.html') if class_name.include?('.html')
        class_name.gsub!('/', '::')
        classes.push(class_name)
      end
      data = []
      classes.each do |class_data|
        url_path = class_data.gsub('::', '/')
        command = class_data.gsub('::', '')
        data.push({
                    class_name: class_data,
                    variable: "railsDocs#{command}",
                    command: "vscode-rails-docs.railsDocs#{command}",
                    url: "https://api.rubyonrails.org/classes/#{url_path}.html"
                  })
      end
      data
    end

    def run_the_build
      data = call
      # build the extension.js
      lines = []
      data.each do |item|
        ext_code = create_ext_command(item[:variable], item[:command], item[:url])
        lines.push(ext_code)
      end
      initial_line = '// Insert the build code in here'
      updated_line = lines.join('')
      gsub_file(EXTENSION_JS_PATH, initial_line, updated_line)
      # build the package.json
      lines = []
      data.each do |item|
        line = "        \"onCommand:vscode-rails-docs.#{item[:variable]}\",\n"
        lines.push(line)
      end
      last_line = lines.last
      last_line = last_line.delete(',')
      last_line = last_line.delete("\n")
      lines.pop
      lines.push(last_line)
      initial_event_line = "\t\"activationEvents\": ["
      gsub_file(PACKAGE_JSON_PATH, initial_event_line, lines.join(''))
      # the contributes or commands part
      initial_line = "\t\t\"commands\": ["
      lines = []
      data.each do |item|
        line = "			{\n" +
               "				\"command\": \"vscode-rails-docs.#{item[:variable]}\",\n" +
               "				\"category\": \"Rails Docs\",\n" +
               "				\"title\": \"#{item[:class_name]}\"\n" +
               "			},\n"
        lines.push(line)
      end
      last_line = lines.last
      last_line = last_line[0..-3]
      lines.pop
      lines.push(last_line)
      gsub_file(PACKAGE_JSON_PATH, initial_line, lines.join(''))
    end
  end
end
