'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./api-server/src/models/clothes/model.js');
const foodModel = require('./api-server/src/models/food/model.js');
const userModel = require('./auth-server/src/auth/models/users.js');
const Collection = require('./api-server/src/models/data-collection.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);

const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const users = userModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: new Collection(food),
  clothes: new Collection(clothes),
  users: new Collection(users),
};

