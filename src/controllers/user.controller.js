import model from '../models';

const { User } = model;

export default class UserController {
    static signUp(req, res) {
        const {id, email, password} = req.body;
        return User.findOne({
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
                    User.create({
                            id,
                            email,
                            password
                        }).then(user_data => res.status(201).send({
                        success: true,
                        message: 'User registered successfully',
                        user_data
                    }));
                }
            });
    }
    static signIn(req, res){
        const {email, password} = req.body;
        return User.findOne({
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
        return User.findOne({
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
        return User
            .findAll({
                attributes: ['id', 'email', 'password']
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error));
    }
}
