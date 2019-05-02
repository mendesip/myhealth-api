export default (sequelize, DataTypes) => {
  const patient_monitor = sequelize.define('patient_monitor', {
    patient_id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,
      references:{
        model: 'patient',
        key: 'sus_number'
      }
    },
    ncd_id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      references:{
        model: 'ncd',
        key: 'id'
      }
    },
    frequency_id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      references:{
        model: 'frequency',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'patient_monitor',
    freezeTableName: true,
    timestamps: false,
  });
  return patient_monitor;
};
