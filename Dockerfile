# Utiliza la imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código de la aplicación al directorio de trabajo
COPY . .

# Expone el puerto 4000
EXPOSE 4000

# Comando para iniciar el servidor
CMD ["node", "index.js"]
