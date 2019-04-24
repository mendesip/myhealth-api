export default (sequelize, DataTypes) => {
    const patient = sequelize.define('patient', {
            sus_number: {
                allowNull: false,
                type: DataTypes.STRING
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING
            },
            date_of_birth: {
                allowNull: false,
                type: DataTypes.STRING
            },
            gender: {
                allowNull: false,
                type: DataTypes.CHAR
            },
            mothers_name: {
                allowNull: false,
                type: DataTypes.STRING
            },
            place_of_birth: {
                allowNull: false,
                type: DataTypes.STRING
            },
            postal_code: {
                allowNull: false,
                type: DataTypes.STRING
            },
            thoroughfare: {
                allowNull: false,
                type: DataTypes.STRING
            },
            number: {
                allowNull: false,
                type: DataTypes.STRING
            },
            neighborhood: {
                allowNull: false,
                type: DataTypes.STRING
            },
            city: {
                allowNull: false,
                type: DataTypes.STRING
            },
            state: {
                allowNull: false,
                type: DataTypes.STRING
            },
        }, {
            sequelize,
            modelName: 'patient',
            freezeTableName: true,
            timestamps: false,
        }
    );
    patient.associate = (models) => {
      patient.hasOne(models.user);
    };
    return patient;
};
