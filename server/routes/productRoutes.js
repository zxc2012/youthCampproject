var express = require('express')
var productRoutes = express.Router()

// middleware that is specific to this router
// api endpoints: all these paths will be prefixed with "/api/"
productRoutes.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
productRoutes.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
productRoutes.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = productRoutes;