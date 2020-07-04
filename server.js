// json-server.js
const jsonServer = require('json-server');
const bodyParser = require("body-parser");
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
	extended: true
}));

server.use(function (req, res, next) {
	if (req.method === 'POST') {

		// Converts POST to GET and move payload to query params
		req.method = 'GET';
		req.query = {}

		for (let p in req.body) req.query[p] = req.body[p];
	}
	// Continue to JSON Server router
	next();
});

server.use(middlewares)
server.use(router)

const port = 3000;
server.listen(port, () => console.log(`JSON Server is running on port ${port} ...`))