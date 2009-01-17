/* Report Ubuntu Bug
 * Andrew Starr-Bochicchio <andrewsomething@ubuntu.com>
 * MIT/X11 License  
 */

CmdUtils.CreateCommand({ 
  name: "ubuntu-report-bug",
  icon: "http://www.ubuntu.com/files/favicon-ubuntu.ico",
/* homepage: "http://packages.qa.debian.org/common/index.html", */
  author: { name: "Andrew Starr-Bochicchio", email: "andrewsomething@ubuntu.com"},
  license: "MIT",
  description: "Report Ubuntu Bug",
  help: "ubuntu-report-bug [source-package]",
  takes: {"package": noun_arb_text},
  preview: function(pblock, package) {
    var template = "Report bug for ${name} on Launchpd";
    pblock.innerHTML = CmdUtils.renderTemplate(template, {"name": package.text});
  },
  execute: function(package) {
    var url = " https://bugs.launchpad.net/ubuntu/+source/" + package.text + "/+filebug";
    Utils.openUrlInBrowser(url);
  }
});
