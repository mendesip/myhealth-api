import User from '../controllers/user';
import Patient from '../controllers/patient';

export default (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the BookStore API!',
    }));

    app.post('/api/user/signUp', User.signUp);
    app.post('/api/user/signIn', User.signIn);
    app.post('/api/user/delete', User.exclude);
    app.get('/api/user/list', User.list);

    app.post('/api/patient/create', Patient.create);
    app.post('/api/patient/load', Patient.load);
    app.get('/api/patient/list', Patient.list);
};
