


const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

var port = process.env.PORT || 8080;

server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running')
})