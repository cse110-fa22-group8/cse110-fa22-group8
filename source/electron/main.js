const { Menu } = require("electron");
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
//const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')


let win;

function createWindow () {

  win = new BrowserWindow({width: 800, height: 600,icon: __dirname + '/icon.ico' })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'login_page/login_page.html'),
    protocol: 'file:',
    slashes: true
  }));

  //win.webContents.openDevTools();
  win.on('closed', () => {
    win = null
  });
}

app.on('ready', function(){
  createWindow()
  const template = []
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});