const express = require('express')
const router = express.Router()
const dbgr = require('debug')("development:router");
const ownerModel = require("../models/ownerModels")

router.get('/', (req, res) => {
  res.send("owner")
})

dbgr("hello",process.env.NODE_ENV)
// if(process.env.NODE_ENV === "development"){
  router.post('/create', async (req, res) => {
    let owners = await ownerModel.find()
    if(owners.length>0){
      return res.send(503).send("you don't have permission to create a new owner")
    }
  })
// }

module.exports = router