const $ = require("jquery");
const { remote } = require("electron");
var win = remote.getCurrentWindow();

$("#minimize").click(function () {
  win.minimize();
});

$("#close").click(function () {
  win.close();
});

$("#maximize").click(function () {
  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
});

function align(c) {
  var element = document.getElementById(c).parentElement,
    height = element.offsetHeight;
  var variable = parseInt(height);
  document.getElementById(c).style.lineHeight = variable + "px";
}

window.onload = function () {
  align("togglers");
  align("showTitle");
};

window.addEventListener(
  "resize",
  function () {
    align("togglers");
    align("showTitle");
  },
  false
);