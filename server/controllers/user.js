import model from '../models';

const { user } = model;

export default class User {
    static signUp(req, res) {
        const {id, email, password} = req.body;
        return user
            .create({
                id,
                email,
                password
            })
            .then(userData => res.status(201).send({
                success: true,
                message: 'User registered successfully',
                userData
            }));
    }
    static signIn(req, res){
        const {id, password} = req.body;
        return user
            .findByPk(id)
            .then((patientData) => {
                if (patientData.password !== password){
                    res.status(400).send({
                        success: false,
                        message: 'Wrong password',
                    })
                }else {
                    res.status(201).send({
                        success: true,
                        message: 'User logged successfully',
                        patientData
                    })
                }
            })
            .catch(error => res.status(400).send(error));
    }
    static exclude(req, res){
        const {id, password} = req.body;
        return user
            .create({
                id,
                password
            })
            .then(patientData => res.status(201).send({
                success: true,
                message: 'User excluded successfully',
                patientData
            }));
    }
    static list(req, res){
        return user
            .findAll({
                attributes: ['id', 'email', 'password']
            })
            .then(users => res.status(200).send(users));
    }
}
