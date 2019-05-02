export default (sequelize, DataTypes) => {
  const register = sequelize.define('register', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    patient_id: {
      allowNull: false,
      type: DataTypes.STRING
    },
    ncd_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    timestamp: {
      allowNull: false,
      type: DataTypes.DATE
    },
    observation: {
      type: DataTypes.STRING
    },
    systolic: {
      type: DataTypes.INTEGER
    },
    diastolic: {
      type: DataTypes.INTEGER
    },
    heart_beats: {
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.FLOAT
    },
    glycemic_rate: {
      type: DataTypes.FLOAT
    },
    bodyfat: {
      type: DataTypes.FLOAT
    }
  }, {
    sequelize,
    modelName: 'register',
    freezeTableName: true,
    timestamps: false,
  });
  return register;
};
