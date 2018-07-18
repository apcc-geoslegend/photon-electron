var remote = require('electron').remote //require('remote')
var Menu = remote.Menu //.require('menu')
var MenuItem = remote.MenuItem // remote.require('menu-item')

// Build our new menu
var menu = new Menu()
menu.append(new MenuItem({
  label: 'Delete',
  click: function() {
    // Trigger an alert when menu item is clicked
    alert('Deleted')
  }
}))
menu.append(new MenuItem({
  label: 'More Info...',
  click: function() {
    // Trigger an alert when menu item is clicked
    alert('Here is more information')
  }
}))

// Add the listener
document.addEventListener('DOMContentLoaded', function () {
  var js_menu = document.querySelector('.js-context-menu');
  if (js_menu != null && typeof(js_menu) != 'undefined') {
    js_menu.addEventListener('click', function (event) {
      menu.popup(remote.getCurrentWindow());
    });
  }
})
