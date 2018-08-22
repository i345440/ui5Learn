sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("demoView.controller.App",{
		onShowHello : function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sLastName = this.getView().getModel("model").getProperty("/recipient/lastName");
			var sFirstName = this.getView().getModel("model").getProperty("/recipient/firstName");
			var sMsg = oBundle.getText("helloMsg", [sFirstName, sLastName]);
			// show message
			MessageToast.show(sMsg);
		}
	});
})