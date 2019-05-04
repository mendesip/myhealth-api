const Sequelize = require("sequelize");
export default class NCD extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {
      modelName: 'ncd',
      freezeTableName: true,
      timestamps: false,
      sequelize,
    });
  }
}
