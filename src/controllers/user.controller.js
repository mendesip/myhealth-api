import model from '../models';

const { User } = model;

export default class UserController {
    static signUp(req, res) {

        const {request_data} = req.body;
        const {email, password} = request_data;

        return User.findOne({where: {email}})
            .then(user_data => {
                if (user_data !== null){
                    res.status(200).send({
                        success: false,
                        message: 'User registered already',
                        code: 1
                    });
                }else {
                    User.create({email, password})
                        .then(user_data => res.status(200).send({
                            success: true,
                            message: 'User registered successfully',
                            code: 0,
                            user_data
                        }))
                        .catch(error => res.status(200).send({
                            success: false,
                            message: error,
                            code: 2,
                        }));
                }
            })
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 3,
            }));
    }
    static signIn(req, res){

        const {request_data} = req.body;
        const {email, password} = request_data;

        console.log("Login: " + email + "password: " + password);

        return User.findOne({where: {email}})
            .then((user_data) => {
                if (user_data !== null) {
                    if (user_data.password !== password) {
                        res.status(200).send({
                            success: false,
                            message: 'Wrong password',
                            code: 4
                        });
                    } else {
                        res.status(200).send({
                            success: true,
                            message: 'User logged successfully',
                            code: 0,
                            user_data
                        });
                    }
                }else{
                    res.status(200).send({
                        success: false,
                        message: 'User not registered',
                        code: 5
                    });
                }
            })
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 6,
            }));
    }
    static exclude(req, res){

        const {request_data} = req.body;
        const {email, password} = request_data;

        return User.findOne({where: {email}})
            .then((user_data) => {
                if (user_data !== null) {
                    if (user_data.password !== password) {
                        res.status(200).send({
                            success: false,
                            message: 'Wrong password',
                            code: 7
                        });
                    } else {
                        user_data.destroy().catch(error => res.status(200).send(error));
                        res.status(200).send({
                            success: true,
                            message: 'User deleted successfully',
                            code: 0,
                            user_data
                        });
                    }
                }else{
                    res.status(200).send({
                        success: false,
                        message: 'User not registered',
                        code: 8
                    });
                }
            })
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 9
            }));
    }
    static list(req, res){
        return User.findAll({attributes: ['id', 'email', 'password']})
            .then(users => res.status(200).send({
                success: true,
                message: 'User list loaded successfully',
                code: 0,
                users
            }))
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 10
            }));
    }
}
