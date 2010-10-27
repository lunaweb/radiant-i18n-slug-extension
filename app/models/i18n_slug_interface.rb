module I18nSlugInterface

  def self.included(base)
    base.class_eval {
      before_filter :add_i18n_slug_partials,
                    :only => [:edit, :new]
      include InstanceMethods
    }
  end

  module InstanceMethods
    def add_i18n_slug_partials
      include_javascript 'admin/i18n_slug'
    end
  end
end
