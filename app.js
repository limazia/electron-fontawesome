const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

let win;

app.on("ready", () => {
  if (process.platform === "darwin") {
    var template = [
      {
        label: "FromScratch",
        submenu: [
          {
            label: "Quit",
            accelerator: "Alt+F4",
            click: function () {
              app.quit();
            },
          },
        ],
      },
    ];
    var osxMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(osxMenu);
  }
});

function createWindow() {
  win = new BrowserWindow({
    title: "Font Awesome Desktop",
    frame: false,
    width: 1920,
    height: 1080,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      blinkFeatures: "OverlayScrollbars",
    },
  });

  win.maximize();
  win.show();

  win.setIcon(path.join(__dirname, "/src/favicon.ico"));

  win.setMenuBarVisibility(false);

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "src/index.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
