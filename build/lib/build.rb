# frozen_string_literal: true

require_relative 'build/version'
require_relative 'build/rails_doc'

module Build
  class Error < StandardError; end
  # Your code goes here...
end

Build::RailsDoc.new.call
