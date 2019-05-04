const Sequelize = require("sequelize");
export default class Register extends Sequelize.Model {
  static init(sequelize){
    return super.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      patient_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ncd_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      timestamp: {
        type: Sequelize.DATE,
        allowNull: false
      },
      observation: {
        type: Sequelize.STRING
      },
      systolic: {
        type: Sequelize.INTEGER
      },
      diastolic: {
        type: Sequelize.INTEGER
      },
      heart_beats: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.FLOAT
      },
      glycemic_rate: {
        type: Sequelize.FLOAT
      },
      bodyfat: {
        type: Sequelize.FLOAT
      }
    },{
      modelName: 'register',
      freezeTableName: true,
      timestamps: false,
      sequelize,
    });
  }
}
