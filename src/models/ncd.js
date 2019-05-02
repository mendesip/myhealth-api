export default (sequelize, DataTypes) => {
  const ncd = sequelize.define('ncd', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'ncd',
    freezeTableName: true,
    timestamps: false,
  });
  return ncd;
};
