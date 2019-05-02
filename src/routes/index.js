import User from '../controllers/user';
import Patient from '../controllers/patient';
import NCD from '../controllers/ncd';
import PatientMonitor from '../controllers/patient_monitor';
import Frequency from '../controllers/frequency';
import Register from '../controllers/register';

export default (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the API!',
    }));

    app.post('/api/user/signUp', User.signUp);
    app.post('/api/user/signIn', User.signIn);
    app.post('/api/user/delete', User.exclude);
    app.get('/api/user/list', User.list);

    app.post('/api/patient/create', Patient.create);
    app.post('/api/patient/load', Patient.load);
    app.post('/api/patient/loadByUser', Patient.loadByUser);
    app.get('/api/patient/list', Patient.list);

    app.get('/api/ncd/list', NCD.list);
    app.post('/api/ncd/create', NCD.create);
    app.post('/api/ncd/delete', NCD.delete);

    app.get('/api/monitor/list', PatientMonitor.list);
    app.post('/api/monitor/create', PatientMonitor.create);
    app.post('/api/monitor/delete', PatientMonitor.delete);

    app.get('/api/frequency/list', Frequency.list);
    app.post('/api/frequency/create', Frequency.create);
    app.post('/api/frequency/delete', Frequency.delete);

    app.post('/api/register/list', Register.list);
    app.post('/api/register/create', Register.create);
};
