// NPM Modules
const { app, BrowserWindow } = require('electron')
const autoUpdater = require("electron-updater")
// My NPM Modules
const playing = require('spotify-playing')

// Node.js
const path = require('path')


function getGeniusLink(song) {
    // Given a song object {artist, song} return the genius lyrics webpage
    let artist = song.artist.replace(/\s+/g, '-').toLowerCase()
    let title = song.song.replace(/\s+/g, '-').toLowerCase()
    return `https://genius.com/${artist}-${title}-lyrics`
}

function createWindow () {
  const win = new BrowserWindow({
    width: 1050,
    height: 1300,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  let last = {}
  setInterval(playing, 2000, (err, now) => {
        if (err)
            return console.error(err)
    
        if (JSON.stringify(now) !== JSON.stringify(last)) {
            let geniusLink = getGeniusLink(now)
            console.log(now, geniusLink)
            win.loadURL(geniusLink)

            // Set last to now
            last = now
        }
    })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

  autoUpdater.checkForUpdatesAndNotify()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
