import User from '../controllers/user';
import Patient from '../controllers/patient';

export default (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the BookStore API!',
    }));

    app.post('/api/user/signup', User.signUp);
    app.post('/api/user/sigin', User.signIn);
    app.post('/api/user/exclude', User.exclude);
    app.get('/api/user/list', User.list);

    app.post('/api/patient/create', Patient.create);
    app.post('/api/patient/load', Patient.load);
    app.post('/api/patient/exclude', Patient.exclude);
};
