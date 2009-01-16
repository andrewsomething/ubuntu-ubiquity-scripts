/* Launchpad Ubuntu Package Search
 * Andrew Starr-Bochicchio <andrewsomething@ubuntu.com>
 * MIT/X11 License  
 */

CmdUtils.CreateCommand({ 
  name: "lp-packages",
  icon: "https://launchpadlibrarian.net/16114928/gem-sm.png",
/* homepage: "http://packages.qa.debian.org/common/index.html", */
  author: { name: "Andrew Starr-Bochicchio", email: "andrewsomething@ubuntu.com"},
  license: "MIT",
  description: "Launchpad Ubuntu Package Search",
  help: "lp-packages [package]",
  takes: {"package": noun_arb_text},
  preview: function(pblock, package) {
    var template = "Search for ${name} on Launchpd";
    pblock.innerHTML = CmdUtils.renderTemplate(template, {"name": package.text});
  },
  execute: function(package) {
    var url = "https://edge.launchpad.net/ubuntu/+search?text=" + package.text;
    Utils.openUrlInBrowser(url);
  }
});
