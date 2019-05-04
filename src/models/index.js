const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.json')[env];
const dotenv = require('dotenv');

import User from "./user";
import Patient from "./patient";
import NCD from "./ncd";
import Frequncy from "./frequency";
import Register from "./register";
import PatinetMonitoring from "./patient_monitoring";


const result = dotenv.config();
if (result.error) {
  throw result.error
}

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const models = {
  User: User.init(sequelize),
  Patient: Patient.init(sequelize),
  NCD: NCD.init(sequelize),
  Frequncy: Frequncy.init(sequelize),
  Register: Register.init(sequelize),
  PatinetMonitoring: PatinetMonitoring.init(sequelize)
};

Object.values(models)
    .filter(model => typeof model.associate === "function")
    .forEach(model => model.associate(models));

const db = {
  ...models,
  sequelize
};

module.exports = db;
