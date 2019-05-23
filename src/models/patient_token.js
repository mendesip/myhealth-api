const Sequelize = require("sequelize");
export default class PatientToken extends Sequelize.Model{
    static init(sequelize){
        return super.init(
            {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            patient_id: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'patient',
                    key: 'sus_number'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            access_token: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            valid: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            }
        }, {
            modelName: 'patient_token',
            freezeTableName: true,
            timestamps: false,
            sequelize
        });
    }
};