import model from '../models';

const { Register } = model;

export default class RegisterController {
    static create(req, res) {

        const {request_data} = req.body;
        const {
            patient_id, ncd_id, timestamp, observation, systolic,
            diastolic, heart_beats, weight, glycemic_rate, bodyfat
        } = request_data;

        return Register.create(
            {
                patient_id, ncd_id, timestamp, observation, systolic,
                diastolic, heart_beats, weight, glycemic_rate, bodyfat
            })
            .then(register_data => res.status(200).send({
                success: true,
                message: 'FrequencyController registered successfully',
                code: 0,
                register_id: register_data.id
            })).catch(error => res.status(200).send(error));
    }
    static list(req, res){

        const {request_data} = req.body;
        const {patient_id} = request_data;

        return Register
            .findAll(
                {
                    attributes:
                        [
                            'patient_id', 'ncd_id', 'timestamp', 'observation', 'systolic',
                            'diastolic', 'heart_beats', 'weight', 'glycemic_rate', 'bodyfat'
                        ],
                    where: {
                        patient_id: patient_id
                    }
                })
            .then(registers => res.status(200).send({
                success: true,
                message: 'Registers list loaded successfully',
                registers,
                code: 0,
            }))
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 32,
            }));
    }
}
