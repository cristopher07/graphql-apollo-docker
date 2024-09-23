// resolvers.js
const { Usuario } = require('./models');

const resolvers = {
  Query: {
    usuarios: () => Usuario.findAll(),
    usuario: (_, { id }) => Usuario.findByPk(id),
  },
  Mutation: {
    crearUsuario: async (_, { nombre, email }) => {
      const usuario = await Usuario.create({ nombre, email });
      return usuario;
    },
    actualizarUsuario: async (_, { id, nombre, email }) => {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) throw new Error('Usuario no encontrado');
      usuario.nombre = nombre || usuario.nombre;
      usuario.email = email || usuario.email;
      await usuario.save();
      return usuario;
    },
    eliminarUsuario: async (_, { id }) => {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) throw new Error('Usuario no encontrado');
      await usuario.destroy();
      return `Usuario con id ${id} eliminado`;
    }
  }
};

module.exports = resolvers;
