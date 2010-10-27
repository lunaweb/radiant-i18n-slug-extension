class I18nSlugExtension < Radiant::Extension
  version "1.0"
  description "i18n support for slugs"
  url "http://github.com/lunaweb/radiant-i18n-slug-extension"
  
  def activate
    Admin::PagesController.send :include, I18nSlugInterface
  end
end
