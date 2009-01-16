/* Debian Package Search
 * Andrew Starr-Bochicchio <andrewsomething@ubuntu.com>
 * MIT/X11 License  
 */

CmdUtils.CreateCommand({ 
  name: "debian-packages",
  icon: "http://www.debian.org/favicon.ico",
  homepage: "http://packages.qa.debian.org/common/index.html",
  author: { name: "Andrew Starr-Bochicchio", email: "andrewsomething@ubuntu.com"},
  license: "MIT",
  description: "Debian Package Search",
  help: "debian-packages [package] <in [distro]>",
  takes: {"package": noun_arb_text},
  modifiers: {"in": noun_arb_text},
  preview: function(pblock, package, mods) {
    var dist_str = "";
    
    // Create a nice looking preview string because the user wont always specify a distro
    if (mods["in"].text.length > 0)
    {
     dist_str = "in " + mods["in"].text; 
    }
    
    var template = "Search for ${name} ${distro} at packages.debian.org";
    pblock.innerHTML = CmdUtils.renderTemplate(template, {"name": package.text, "distro": dist_str});
  },
  execute: function(package, mods) {
    var dist_str = "";
    
    if (mods["in"].text.length > 0)
    {
      dist_str = mods["in"].text + "/";
    }
    
    var url = "http://packages.debian.org/" + dist_str + package.text;
    Utils.openUrlInBrowser(url);
  }
});