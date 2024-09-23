// schema.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Usuario {
    id: ID!
    nombre: String!
    email: String!
  }

  type Query {
    usuarios: [Usuario!]!
    usuario(id: ID!): Usuario
  }

  type Mutation {
    crearUsuario(nombre: String!, email: String!): Usuario
    actualizarUsuario(id: ID!, nombre: String, email: String): Usuario
    eliminarUsuario(id: ID!): String
  }
`;

module.exports = typeDefs;
