const mongoose = require('mongoose')
const dbgr = require('debug')("development:mongoose")

const config = require('config')

const dbConnect = (dbName) => {
  mongoose.connect(`${config.get("MONGODB_URI")}/${dbName}`)
  .then(()=> {
    dbgr("MongoDB Connected Successfully")
  })
  .catch((err) => {
    dbgr(err)
  })

}

module.exports = dbConnect