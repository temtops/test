const os = require('os')
const { uptime } = require('process')
console.log(os.totalmem()/(1000000*1024))
console.log(os.freemem()/(1000000*1024))
console.log(Math.floor(os.uptime()/(60*24)))
console.log(os.arch())
console.log(os.type())