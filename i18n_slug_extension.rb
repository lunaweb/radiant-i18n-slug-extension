# Uncomment this if you reference any of your controllers in activate
# require_dependency 'application_controller'

class I18nSlugExtension < Radiant::Extension
  version "1.0"
  description "i18n support for slugs"
  url "http://yourwebsite.com/i18n_slug"
  
  # extension_config do |config|
  #   config.gem 'some-awesome-gem
  #   config.after_initialize do
  #     run_something
  #   end
  # end

  # See your config/routes.rb file in this extension to define custom routes
  
  def activate
    Admin::PagesController.send :include, PageI18nSlugInterface
    # tab 'Content' do
    #   add_item "I18n Slug", "/admin/i18n_slug", :after => "Pages"
    # end
  end
end
