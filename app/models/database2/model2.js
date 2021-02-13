'use strict';
module.exports = (sequelize, DataTypes) => {
  const VarejaoContact = sequelize.define("contact", {
    nome: DataTypes.STRING,
    celular: DataTypes.STRING,
  }, {timestamps: false});

  return VarejaoContact;
}