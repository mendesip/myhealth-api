export default (sequelize, DataTypes) => {
  const frequency = sequelize.define('frequency', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    type: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    days_of_week: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.BOOLEAN)
    },
    custom_every: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    times_a_day: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    hours_of_day: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.TIME)
    },
    start_date: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'frequency',
    freezeTableName: true,
    timestamps: false,
  });
  return frequency;
};
