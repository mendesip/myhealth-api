import UserController from '../controllers/user.controller';
import PatientController from '../controllers/patient.controller';
import NCDController from '../controllers/ncd.controller';
import PatientMonitoringController from '../controllers/patientmonitoring.controller';
import FrequencyController from '../controllers/frequency.controller';
import RegisterController from '../controllers/register.controller';

export default (app) => {

    app.get('*', (req, res) => res.status(200).send({
        message: 'Welcome to the default API route',
    }));

    app.post('/api/user/signUp', UserController.signUp);
    app.post('/api/user/signIn', UserController.signIn);
    app.post('/api/user/delete', UserController.exclude);
    app.get('/api/user/list', UserController.list);

    app.post('/api/patient/create', PatientController.create);
    app.post('/api/patient/load', PatientController.load);
    app.post('/api/patient/loadByUser', PatientController.loadByUser);
    app.get('/api/patient/list', PatientController.list);

    app.get('/api/ncd/list', NCDController.list);
    app.post('/api/ncd/create', NCDController.create);
    app.post('/api/ncd/delete', NCDController.delete);

    app.get('/api/monitor/list', PatientMonitoringController.list);
    app.post('/api/monitor/create', PatientMonitoringController.create);
    app.post('/api/monitor/delete', PatientMonitoringController.delete);

    app.get('/api/frequency/list', FrequencyController.list);
    app.post('/api/frequency/create', FrequencyController.create);
    app.post('/api/frequency/delete', FrequencyController.delete);

    app.post('/api/register/list', RegisterController.list);
    app.post('/api/register/create', RegisterController.create);
};
