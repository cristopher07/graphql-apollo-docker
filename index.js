// index.js
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { sequelize } = require('./models');

const server = new ApolloServer({ typeDefs, resolvers });

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
    return server.listen();
  })
  .then(({ url }) => {
    console.log(`Servidor listo en ${url}`);
  })
  .catch(err => {
    console.error('Error conectando a la base de datos', err);
  });
