export default (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please enter the user id'
      },
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the email'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the password'
      }
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
  return user;
};
