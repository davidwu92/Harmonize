//config/index.js
const MONGODB_URI = "mongodb://localhost/harmonizedb";
module.exports = require('mongoose')
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })