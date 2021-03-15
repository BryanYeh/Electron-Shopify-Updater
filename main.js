const { app, BrowserWindow } = require("electron");
const server = require("./server");
const fs = require('fs');

function createWindow() {
  if (fs.existsSync("uploads")) {
    const files = fs.readdirSync("uploads");

    if (files.length > 0) {
      files.forEach(function (filename) {
        fs.unlinkSync("uploads/" + filename);
      });
    }
  }

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    resizable: false
  });

  win.loadURL("http://localhost:3000");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
