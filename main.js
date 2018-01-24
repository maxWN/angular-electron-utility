const { app, BrowserWindow, ipcMain } = require('electron')
var path = require('path')

let win;
function createWindow () {

  // Create the browser window.
  win = new BrowserWindow({
    width: 700, 
    height: 650,
    backgroundColor: '#ffffff',
    icon: 'Mahm0udwally-All-Flat-Music.ico'
  })

  win.loadURL(`file://${__dirname}/dist/index.html`);

  //test modal window
  modalWindow = new BrowserWindow({frame:false,
    width: 400, 
    height: 350,
    width: 400, 
    height: 350,
    backgroundColor: '#ffffff',
    show: false,
    icon: 'Mahm0udwally-All-Flat-Music.ico',
    parent: win
  })
  //C:\Users\mnakel.SISFIRST\Documents\Development Files\LOCAL_PROJECTS\angular-desktop\main.js
  //C:\Users\mnakel.SISFIRST\Documents\Development Files\LOCAL_PROJECTS\angular-desktop\src\app\shared\templates
  modalWindow.loadURL(`file://${__dirname}/src/app/shared/templates/generic-modal.tmp.html`)

  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()
  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })

}
//    icon: `file://${__dirname}/src/assets/newItem.PNG`
//    icon: path.join(__dirname+'assets/sample-1.jpg')
//    doesn't find icon file


ipcMain.on('open-modal', (event, arg) => {
  modalWindow.show();
});

// Create window on electron intialization
app.on('ready', createWindow)
// Quit when all windows are closed.

app.on('window-all-closed', function () {
  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
});


ELECTRON_ENABLE_LOGGING=1
