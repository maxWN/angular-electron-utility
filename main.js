const { app, BrowserWindow } = require('electron')
var path = require('path')

let win;
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 600, 
    height: 600,
    backgroundColor: '#ffffff',
    icon: 'Mahm0udwally-All-Flat-Music.ico'
  })
  win.loadURL(`file://${__dirname}/dist/index.html`)
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

// Create window on electron intialization
app.on('ready', createWindow)
// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})