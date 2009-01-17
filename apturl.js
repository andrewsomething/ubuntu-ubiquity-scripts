/* AptURL
* Andrew Starr-Bochicchio <andrewsomething@ubuntu.com>
* MIT/X11 License  
*/

CmdUtils.CreateCommand({
  name: "apturl",
  icon: "http://www.ubuntu.com/files/favicon-ubuntu.ico",
/* homepage: "http://packages.qa.debian.org/common/index.html", */
  author: { name: "Andrew Starr-Bochicchio", email: "andrewsomething@ubuntu.com"},
  license: "MIT",
  description: "Install Ubuntu packages with AptURL.",
  help: "apturl [package]",
  takes: {"package": noun_arb_text},
  preview: function(pblock, package) {
    var template = "Install ${name} on Ubuntu";
    pblock.innerHTML = CmdUtils.renderTemplate(template, {"name": package.text});
  },
  execute: function(package) {
    var url = "apt:" + package.text;
    Utils.openUrlInBrowser(url);
  }
});
