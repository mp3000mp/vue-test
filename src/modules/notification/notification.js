
const browserOptions = {}
browserOptions.isSupported = 'Notification' in window
if (browserOptions.isSupported) {
  browserOptions.isAllowed = Notification.permission === 'granted'
  browserOptions.isDenied = Notification.permission === 'denied'
}
if (browserOptions.isSupported && !browserOptions.isAllowed && !browserOptions.isDenied) {
  Notification.requestPermission(permission => {
    browserOptions.isAllowed = permission === 'granted'
    browserOptions.isDenied = permission === 'denied'
  })
}

const notification = {
  fire: (msg) => {
    if (browserOptions.isSupported && browserOptions.isAllowed) {
      const notif = new Notification(msg)
      notif.addEventListener('click', () => {
        notif.close()
      })
    }
  }
}

module.exports = notification
