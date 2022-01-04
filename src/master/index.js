

const master = require('./master')

master.run().then(
  r => {},
  e => console.log('[master] run:', e)
)
