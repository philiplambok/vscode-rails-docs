# frozen_string_literal: true

RSpec.describe Build do
  it 'has a version number' do
    expect(Build::VERSION).not_to be nil
  end
end
