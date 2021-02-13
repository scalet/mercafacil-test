'use strict';
module.exports = (sequelize, DataTypes) => {
  const MacapaContact = sequelize.define("contact", {
    nome: DataTypes.STRING,
    celular: DataTypes.STRING,
  }, {timestamps: false});

  return MacapaContact;
}