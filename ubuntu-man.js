/* Ubuntu Man Page Search
 * Andrew Starr-Bochicchio <andrewsomething@ubuntu.com>
 * MIT/X11 License  
 */

CmdUtils.CreateCommand({ 
  name: "ubuntu-man",
  icon: "http://www.ubuntu.com/files/favicon-ubuntu.ico",
  homepage: "http://manpages.ubuntu.com/",
  author: { name: "Andrew Starr-Bochicchio", email: "andrewsomething@ubuntu.com"},
  license: "MIT",
  description: "Ubuntu Man Page Search",
  help: "ubuntu-man [package]",
  takes: {"package": noun_arb_text},
  preview: function(pblock, package, mods) {
  
    var template = "Search for ${name} at manpages.ubuntu.com";
    pblock.innerHTML = CmdUtils.renderTemplate(template, {"name": package.text});
  },
  execute: function(package) {
    var url = "http://manpages.ubuntu.com/manpages/" + package.text;
    Utils.openUrlInBrowser(url);
  }
});
