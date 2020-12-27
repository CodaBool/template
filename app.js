const express = require("express")
const app = express()

require("dotenv").config()

app.get("/", (req, res) => {
  res.send('create an .env file if needed')
})

if (process.env.LOCAL_PORT) {
  app.listen(process.env.LOCAL_PORT, () =>
    console.log(`http://localhost:${process.env.LOCAL_PORT}`)
  )
}

module.exports = app