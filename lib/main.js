//A plugin to assist the OpenShiftQE Automation team

//Includes
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs")

//Modify the TCMS runs page
var contentScriptString = 'hack_run();'

//Uses PageMod to alter a page, given a url match ("include:" below)
pageMod.PageMod({
  include: "https://tcms.engineering.redhat.com/run/*",
  contentScript: contentScriptString,
  contentScriptFile: [data.url("jquery-2.1.4.min.js"),data.url("tcms_run.js")]
});

//A button to inform the user that the add-on is present
var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "CucuShift Homepage",
  icon: {
    "32": "./icon.png",
  },
  onClick: homePage
});

function homePage(state) {
  tabs.open("https://github.com/openshift/cucushift/");
}
