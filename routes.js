const routes = require('next-routes')

 // Name  Pattern  Page
module.exports = routes()                          
.add('index')                                       
.add('seguros', '/sec', 'secure')                     