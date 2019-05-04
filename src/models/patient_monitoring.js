const Sequelize = require("sequelize");
export default class PatientMonitoring extends Sequelize.Model{
  static init(sequelize){
    return super.init({
      patient_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        references:{
          model: 'patient',
          key: 'sus_number'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      ncd_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references:{
          model: 'ncd',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      frequency_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references:{
          model: 'frequency',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },{
      modelName: 'patient_monitoring',
      freezeTableName: true,
      timestamps: false,
      sequelize
    });
  }
}
