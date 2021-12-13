import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./src/schema";
import { conectarMongoDB } from "./src/bases/databaseDev";
const cors = require('cors')


const server = express();

conectarMongoDB();
const port=  process.env.port || 3000;

server.use(cors()); 

server.use("/graphql",graphqlHTTP({
    graphiql:true,
    schema:schema,
    context:{
        messageId:"test"
    }
}));

server.get("/",(req,res)=>{
    res.json({message:"Servidor Activo en puerto "+port})
});

server.get("/test",(req,res)=>{
  res.json({message:"Servidor Funcionando"+port})
});

server.listen(port, () =>{
    console.log("Servidor corriendo en puerto "+port);
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


