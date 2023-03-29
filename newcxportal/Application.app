{
	"MainPage": "/NewCXPortal/Pages/LandingPageBottomNavigation.page",
	"OnLaunch": [
		"/NewCXPortal/Actions/Service/InitializeOnline.action",
		"/NewCXPortal/Actions/Service/InitializeOnlinePurchaseOrdersService.action",
		"/NewCXPortal/Actions/Service/InitializeOnlineOutboundDeliveriesService.action"
	],
	"OnWillUpdate": "/NewCXPortal/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/NewCXPortal/Actions/Service/InitializeOnline.action",
	"Styles": "/NewCXPortal/Styles/Styles.less",
	"Version": "/NewCXPortal/Globals/AppDefinition_Version.global",
	"Localization": "/NewCXPortal/i18n/i18n.properties",
	"_SchemaVersion": "6.3",
	"_Name": "NewCXPortal"
}