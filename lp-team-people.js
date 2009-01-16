/* Launchpad Team and People Search
 * Andrew Starr-Bochicchio <andrewsomething@ubuntu.com>
 * MIT/X11 License  
 */

CmdUtils.CreateCommand({ 
  name: "lp-team-and-people",
  icon: "https://launchpadlibrarian.net/16114928/gem-sm.png",
/* homepage: "http://packages.qa.debian.org/common/index.html", */
  author: { name: "Andrew Starr-Bochicchio", email: "andrewsomething@ubuntu.com"},
  license: "MIT",
  description: "Launchpad Team and People Search",
  help: "lp-team-people [team or person]",
  takes: {"team or person": noun_arb_text},
  preview: function(pblock, team) {
    var template = "Search for ${name} on Launchpd";
    pblock.innerHTML = CmdUtils.renderTemplate(template, {"name": team.text});
  },
  execute: function(team) {
    var url = "https://edge.launchpad.net/people/?name=" + team.text;
    Utils.openUrlInBrowser(url);
  }
});
