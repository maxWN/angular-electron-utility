const { app, BrowserWindow, ipcMain } = require('electron')
var path = require('path')

let modalTitle;
let mainWindow;
function createWindow () {

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 750, 
    height: 650,
    backgroundColor: '#ffffff',
    icon: 'knife.png'
  })
  // turn off dev menu
  mainWindow.setMenu(null);
  // load index.html as main window
  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);

  // test modal window
  modalWindow = new BrowserWindow({
    width: 400, 
    height: 475,
    maxWidth: 400, 
    maxHeight: 475,
    backgroundColor: '#ffffff',
    show: false,
    icon: 'Mahm0udwally-All-Flat-Music.ico',
    parent: mainWindow,
    title: modalTitle
  })
  modalWindow.setMenu(null);
  modalWindow.loadURL(`file://${__dirname}/src/app/primarySectors/shared/templates/generic-modal.tmp.html`)

  //// uncomment below to open the DevTools.
  // mainWindow.webContents.openDevTools()
  // Event when the window is closed.
  mainWindow.on('closed', function (event) {
    mainWindow = null;
  })

}
//    icon: `file://${__dirname}/src/assets/newItem.PNG`
//    icon: path.join(__dirname+'assets/sample-1.jpg')
//    doesn't find icon file

ipcMain.on('open-modal', (event, arg) => {
  modalTitle = arg;
  modalWindow.show();
});

// replace electron modal with pure HTML/CSS/JS modal
// cannot 'close' modal window after first usage, because 
// framework destroys the only instance of the popup  
ipcMain.on('closed', (event) => {
  // console.log(event);
  // event.preventDefault();
  // event.returnValue = false;
  // modalWindow.hide();
  modalWindow = null;
});

// open development/debug window
ipcMain.on('open-dev-menu', (event, arg)=>{
  mainWindow.webContents.openDevTools();
});

// TODO: 
// when development window is closed, change 
// checked input back to false in app settings
ipcMain.on('close-dev-menu', (event, arg) => {
  mainWindow.setMenu(null);
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
  if (mainWindow === null) {
    createWindow()
  }
});


ELECTRON_ENABLE_LOGGING=1
