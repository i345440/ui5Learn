sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";
   	return UIComponent.extend("demoView.Component", {
        metadata : {
            manifest: "json"
      	},
  		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			// set data model
			// set data model on view
			var oData = {
				recipient : {
					firstName: "John",
					lastName: "Smith"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel, "model");
			
			// set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "demoView.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
	    }
   	});
});