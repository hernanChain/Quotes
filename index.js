const express = require('express')
const { PORT } = require('./config')
const { homeRoutes, quotesRoutes } = require('./routes')
const { notFound_Middleware } = require('./middlewares')
const server = express()

server.use(express.static('./public'));
server.use(express.json());
server.use('/', homeRoutes);
server.use('/', quotesRoutes);
server.use(notFound_Middleware)


server.listen(PORT, () => {
    console.log("The server is running on port " + PORT);
})