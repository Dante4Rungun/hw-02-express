const mongoose = require('mongoose');
require('dotenv').config();

const {DB_HOST, PORT} = process.env

const app = require('./app')

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`)
    })  
  })
  .catch(err => {
    console.log(`Server not running. Error message: ${err.message}`)
    process.exit(1)
   })

