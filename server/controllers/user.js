import model from '../models';

const { user } = model;

export default class User {
    static signUp(req, res) {
        const {id, email, password} = req.body;
        return user.findOne({
            where: {
                email: email
            }
            })
            .then(userData => {
                if (userData !== null){
                    res.status(200).send({
                        success: false,
                        message: 'User registered already',
                    })
                }else {
                    user.create({
                            id,
                            email,
                            password
                        }).then(userData => res.status(201).send({
                        success: true,
                        message: 'User registered successfully',
                        userData
                    }));
                }
            }).catch(error => res.status(400).send(error));
    }
    static signIn(req, res){
        const {email, password} = req.body;
        return user.findOne({
            where: {
                email: email
            }
            })
            .then((userData) => {
                if (userData !== null) {
                    if (userData.password !== password) {
                        res.status(200).send({
                            success: false,
                            message: 'Wrong password',
                        })
                    } else {
                        res.status(201).send({
                            success: true,
                            message: 'User logged successfully',
                            userData
                        })
                    }
                }else{
                    res.status(200).send({
                        success: false,
                        message: 'User not registered',
                    });
                }
            })
            .catch(error => res.status(400).send(error));
    }
    static exclude(req, res){
        const {email, password} = req.body;
        return user.findOne({
            where: {
                email: email
            }
        })
            .then((userData) => {
                if (userData !== null) {
                    if (userData.password !== password) {
                        res.status(200).send({
                            success: false,
                            message: 'Wrong password',
                        })
                    } else {
                        userData.destroy()
                            .catch(error => res.status(400).send(error));
                        res.status(201).send({
                            success: true,
                            message: 'User deleted successfully',
                            userData
                        })
                    }
                }else{
                    res.status(200).send({
                        success: false,
                        message: 'User not registered',
                    });
                }
            })
            .catch(error => res.status(400).send(error));
    }
    static list(req, res){
        return user
            .findAll({
                attributes: ['id', 'email', 'password']
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error));
    }
}
