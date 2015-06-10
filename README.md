cucushift-firefox
=================

A firefox extension for extending TCMS (Nitrate) capabilities. This extension will allow a user to view cucumber scenario files directly on GitHub, file JIRA issues, and show, in TCMS runs, who the developer is based on the 'Notes' field.

This extension was built using the [Mozilla Add-on SDK](https://developer.mozilla.org/en-US/Add-ons/SDK).

You can find a prebuilt .xpi file to install in [the builds folder](https://github.com/cjryan/cucushift-firefox/raw/master/builds/cucushift-firefox.xpi)

In order to build this extension as a .xpi file, to install into firefox, please install the SDK as linked above, clone the cucushift-firefox repo, and in the repository, run `cfx xpi`. This will generate an .xpi file that can be installed via the Firefox Addons page.

Usage
-----

When you visit a TCMS caserun page (a url ending in *runs/<run\_id>), the page will automatically be modified by the plugin.

You will notice a new "Developers" column has been added to the far right, indicating the developer of a particular case, based off of the 'Notes' field in TCMS.

In the 'Cases' drop-down menu in TCMS (located above the mass of tags in the middle of the caserun page), you will notice three new dropdown items: CucuShift, JIRA Issue, and SetDeveloper. To use these, first check which cases you wish to interact with, then one of the above items from the 'Cases' drop-down menu.

* The CucuShift drop-down element will allow a user to select cases to be run in Jenkins for Continuous Integration testing.
* The JIRA Issue drop-down element will take you to JIRA to file an issue regarding the particular case; for example, if there is a blocker, a bug, or a general issue.
* The 'SetDeveloper' drop-down element  will update the 'Notes' field in TCMS to the active developer of a cucumber scenario, which will then show up in the far right "Developer" column in the case run page.

When you visit a 'case' page in TCMS (a url ending in *case/<case\_id>), you will notice a link to GitHub near the 'Script' field. This will take you to the direct GitHub link for a given scenario for review.
