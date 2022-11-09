const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
  },
    name: {
      type: DataTypes.STRING,
      
    },
    imgflag: {
      type: DataTypes.STRING,
      varchar: 255,
    },
    continent: {
    type: DataTypes.STRING,
    varchar: 255
    },
    capital: {
    type: DataTypes.STRING,
    varchar: 255,
    },
    subregion: {
    type: DataTypes.STRING,
    varchar: 255
    },
    area: {
    type: DataTypes.INTEGER,
    },
    population: {
    type: DataTypes.INTEGER,
    varchar: 255
    },
    createInDb:{
      type: DataTypes.BOOLEAN
    },
  },
  {timestamps: false}
  );
};
