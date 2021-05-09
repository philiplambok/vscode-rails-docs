# frozen_string_literal: true

require 'spec_helper'

RSpec.describe Build::RailsDoc do
  it 'returns expected response' do
    allow(Dir).to receive_messages(glob: fake_dir)
    expected_response = [
      {
        class_name: 'ActionMailer',
        variable: 'railsDocsActionMailer',
        command: 'vscode-rails-docs.railsDocsActionMailer',
        url: 'https://api.rubyonrails.org/classes/ActionMailer.html'
      },
      {
        class_name: 'ActiveSupport',
        variable: 'railsDocsActiveSupport',
        command: 'vscode-rails-docs.railsDocsActiveSupport',
        url: 'https://api.rubyonrails.org/classes/ActiveSupport.html'
      },
      {
        class_name: 'ActiveSupport::CachingKeyGenerator',
        variable: 'railsDocsActiveSupportCachingKeyGenerator',
        command: 'vscode-rails-docs.railsDocsActiveSupportCachingKeyGenerator',
        url: 'https://api.rubyonrails.org/classes/ActiveSupport/CachingKeyGenerator.html'
      },
      {
        class_name: 'ActiveSupport::Concern',
        variable: 'railsDocsActiveSupportConcern',
        command: 'vscode-rails-docs.railsDocsActiveSupportConcern',
        url: 'https://api.rubyonrails.org/classes/ActiveSupport/Concern.html'
      },
      {
        class_name: 'ActiveSupport::LogSubscriber',
        variable: 'railsDocsActiveSupportLogSubscriber',
        command: 'vscode-rails-docs.railsDocsActiveSupportLogSubscriber',
        url: 'https://api.rubyonrails.org/classes/ActiveSupport/LogSubscriber.html'
      }
    ]
    expect(described_class.new.call).to eq expected_response
  end

  private

  def fake_dir
    [
      '/Users/philiplambok/Codes/ruby/rails/doc/rdoc/css',
      '/Users/philiplambok/Codes/ruby/rails/doc/rdoc/css/github.css',
      '/Users/philiplambok/Codes/ruby/rails/doc/rdoc/css/reset.css',
      '/Users/philiplambok/Codes/ruby/rails/doc/rdoc/css/main.css',
      '/Users/philiplambok/Codes/ruby/rails/doc/rdoc/css/panel.css',
      '/Users/philiplambok/Codes/ruby/rails/doc/rdoc/classes',
      '/Users/philiplambok/Codes/ruby/rails/doc/rdoc/classes/ActionMailer.html',
      '/Users/philiplambok/Codes/ruby/rails/doc/rdoc/classes/ActiveSupport',
      '/Users/philiplambok/Codes/ruby/rails/doc/rdoc/classes/ActiveSupport/CachingKeyGenerator.html',
      '/Users/philiplambok/Codes/ruby/rails/doc/rdoc/classes/ActiveSupport/Concern.html',
      '/Users/philiplambok/Codes/ruby/rails/doc/rdoc/classes/ActiveSupport/LogSubscriber.html'
    ]
  end
end
