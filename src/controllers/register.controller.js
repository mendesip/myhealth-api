import model from '../models';

const { Register } = model;

export default class RegisterController {
    static create(req, res) {
        const {patient_id, ncd_id, timestamp, observation, systolic, diastolic,
            heart_beats, weight, glycemic_rate, bodyfat} = req.body;
        return Register.create({
            patient_id, ncd_id, timestamp, observation, systolic,
            diastolic, heart_beats, weight, glycemic_rate, bodyfat
            }).then(registerData => res.status(200).send({
                success: true,
                message: 'FrequencyController registered successfully',
                register_id: registerData.id
            })).catch(error => res.status(200).send(error));
    }
    static list(req, res){
        const {patient_id} = req.body;
        return Register
            .findAll({
                attributes: ['patient_id','ncd_id','timestamp','observation','systolic','diastolic',
                    'heart_beats','weight','glycemic_rate','bodyfat'],
                where: {
                    patient_id:patient_id
                }
            }).then(registers => res.status(200).send(registers))
            .catch(error => res.status(200).send(error));
    }
}
