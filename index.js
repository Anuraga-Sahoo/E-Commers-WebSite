const express = require('express')
const cookieParser = require("cookie-parser")
const path = require('path')
// import db
const dbConnect = require('./config/mongooseConnection')
// import router
const ownersRouter = require('./routes/ownersRouter')
const usersRouter = require('./routes/usersRouter')
const productsRouter = require('./routes/productsRouter')
const dbgr = require('debug')("development:index");

const app = express()
const PORT = 8000

// connect your db
dbConnect('bagShop')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")

app.use('/owners', ownersRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)


app.listen(PORT, (err) => {
  err ? dbgr(err) : dbgr(`http://localhost:${PORT}`)
})

