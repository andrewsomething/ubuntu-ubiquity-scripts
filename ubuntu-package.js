/* Ubuntu Package database searcher
 * David Futcher (bobbo) <bobbo@ubuntu.com>
 * MIT/X11 License  
 */

CmdUtils.CreateCommand({ 
  name: "ubuntu-packages",
  icon: "http://www.ubuntu.com/files/favicon-ubuntu.ico",
  homepage: "http://bobbo.me.uk/code/ubiquity/ubuntu-packages.html",
  author: { name: "David Futcher", email: "bobbo@ubuntu.com"},
  license: "MIT",
  description: "Search Ubuntu packages database",
  help: "ubuntu-packages [package] <in [distro]>",
  takes: {"package": noun_arb_text},
  modifiers: {"in": noun_arb_text},
  preview: function(pblock, package, mods) {
    var dist_str = "";
    
    // Create a nice looking preview string because the user wont always specify a distro
    if (mods["in"].text.length > 0)
    {
     dist_str = "in " + mods["in"].text; 
    }
    
    var template = "Search for ${name} ${distro} at packages.ubuntu.com";
    pblock.innerHTML = CmdUtils.renderTemplate(template, {"name": package.text, "distro": dist_str});
  },
  execute: function(package, mods) {
    var dist_str = "";
    
    if (mods["in"].text.length > 0)
    {
      dist_str = mods["in"].text + "/";
    }
    
    var url = "http://packages.ubuntu.com/" + dist_str + package.text;
    Utils.openUrlInBrowser(url);
  }
});
