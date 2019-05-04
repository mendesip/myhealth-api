const Sequelize = require("sequelize");
export default class Patient extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            sus_number: {
                type: Sequelize.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id:{
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            date_of_birth: {
                type: Sequelize.DATE,
                allowNull: false
            },
            gender: {
                type: Sequelize.CHAR(1),
                allowNull: false
            },
            mothers_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            place_of_birth: {
                type: Sequelize.STRING,
                allowNull: false
            },
            postcode: {
                type: Sequelize.STRING,
                allowNull: false
            },
            thoroughfare: {
                type: Sequelize.STRING,
                allowNull: false
            },
            number: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            complement: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            neighborhood: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            state: {
                type: Sequelize.STRING,
                allowNull: false,
            }
        },{
            modelName: 'patient',
            freezeTableName: true,
            timestamps: false,
            sequelize
        });
    }
}
