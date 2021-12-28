"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = require("express-graphql");

var _schema = _interopRequireDefault(require("./schema"));

var _database = require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cors = require('cors');

const server = (0, _express.default)();
(0, _database.conectarMongoDB)();
const port = process.env.port || 3000;
server.use(cors());
server.use("/graphql", (0, _expressGraphql.graphqlHTTP)({
  graphiql: true,
  schema: _schema.default,
  context: {
    messageId: "test"
  }
}));
server.get("/", (req, res) => {
  res.json({
    message: "Servidor Activo en puerto " + port
  });
});
server.get("/test", (req, res) => {
  res.json({
    message: "Servidor Funcionando" + port
  });
});
server.listen(port, () => {
  console.log("Servidor corriendo en puerto " + port);
});
/*var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const cors = require('cors')

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();

app.use(cors()); 

app.use('/graphql', graphqlHTTP({
    mode:'no-cors',
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(3000);
console.log('Running a GraphQL API server at http://localhost:3000/graphql');*/
//# sourceMappingURL=index copy.js.map