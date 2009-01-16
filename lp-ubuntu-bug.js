/* Launchpad Ubuntu Bug Search
 * Andrew Starr-Bochicchio <andrewsomething@ubuntu.com>
 * MIT/X11 License  
 */

CmdUtils.CreateCommand({ 
  name: "lp-ubuntu-bug",
  icon: "https://launchpadlibrarian.net/16114928/gem-sm.png",
/* homepage: "http://packages.qa.debian.org/common/index.html", */
  author: { name: "Andrew Starr-Bochicchio", email: "andrewsomething@ubuntu.com"},
  license: "MIT",
  description: "Launchpad Ubuntu Bug Search",
  help: "lp-ubuntu-bug [bug # or description]",
  takes: {"bug # or description": noun_arb_text},
  preview: function(pblock, bug) {
    var template = "Search for ${name} on Launchpd";
    pblock.innerHTML = CmdUtils.renderTemplate(template, {"name": bug.text});
  },
  execute: function(bug) {
    var url = "https://launchpad.net/distros/ubuntu/+bugs?field.searchtext=" + bug.text;
    Utils.openUrlInBrowser(url);
  }
});
