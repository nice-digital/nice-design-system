source 'https://rubygems.org'

group :development, :test do
  gem 'jekyll', '~> 3.4.3'
  gem 'jekyll-redirect-from', '~> 0.12.1'
  gem 'jekyll-sitemap', '~> 1.0.0'
  gem 'scss_lint', '~> 0.52.0'
end

# Timezone fix - https://jekyllrb.com/docs/windows/#timezone-management
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Avoid having to poll for changes on Windows - https://jekyllrb.com/docs/windows/#auto-regeneration
gem 'wdm', '~> 0.1.0' if Gem.win_platform?
