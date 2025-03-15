const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'Gautam',
  'root',
  'openitsoon',
  {
      host : 'localhost',
      dialect: 'mysql'
  }
);

module.exports = sequelize;
