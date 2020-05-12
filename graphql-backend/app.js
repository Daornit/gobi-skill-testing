const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
// import middleware
// import routes

require('dotenv').config();

// Before app starts all models loading
require('./models/post');
require('./models/comment');
require('./models/category');

const graphQlSchema = require('./graphql/schema');
const graphQlResolvers = require('./graphql/resolvers');

// authentication orj irj bolno.
const server = new ApolloServer({
  context: async ({ req }) => {
    return {};
  },
  typeDefs: graphQlSchema, 
  resolvers: graphQlResolvers 
});

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
  }
  next();
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json()); 
app.use(express.static('public'));

server.applyMiddleware({ app });

mongoose.connect(process.env.DATABASE_URL).then(() => {
  app.listen({ port: process.env.PORT || 4000  }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}).catch(err => {
  throw err;
})
