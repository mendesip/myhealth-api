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
            .then(user_data => {
                if (user_data !== null){
                    res.status(200).send({
                        success: false,
                        message: 'User registered already',
                    })
                }else {
                    user.create({
                            id,
                            email,
                            password
                        }).then(user_data => res.status(201).send({
                        success: true,
                        message: 'User registered successfully',
                        user_data
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
            .then((user_data) => {
                if (user_data !== null) {
                    if (user_data.password !== password) {
                        res.status(200).send({
                            success: false,
                            message: 'Wrong password',
                        })
                    } else {
                        res.status(201).send({
                            success: true,
                            message: 'User logged successfully',
                            user_data
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
            .then((user_data) => {
                if (user_data !== null) {
                    if (user_data.password !== password) {
                        res.status(200).send({
                            success: false,
                            message: 'Wrong password',
                        })
                    } else {
                        user_data.destroy()
                            .catch(error => res.status(400).send(error));
                        res.status(201).send({
                            success: true,
                            message: 'User deleted successfully',
                            user_data
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
