const Sequelize = require("sequelize");

export default class User extends Sequelize.Model {
  static init(sequelize){
    return super.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    }, {
      modelName: 'user',
      freezeTableName: true,
      timestamps: false,
      sequelize
    });
  }
}
