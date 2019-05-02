import model from '../models';

const { register } = model;

export default class Register {
    static create(req, res) {
        const {patient_id, ncd_id, timestamp, observation, systolic, diastolic,
            heart_beats, weight, glycemic_rate, bodyfat} = req.body;
        return register.create({
            patient_id, ncd_id, timestamp, observation, systolic,
            diastolic, heart_beats, weight, glycemic_rate, bodyfat
            }).then(registerData => res.status(201).send({
                success: true,
                message: 'Frequency registered successfully',
                register_id: registerData.id
            }));
    }
    static list(req, res){
        const {patient_id} = req.body;
        return register
            .findAll({
                attributes: ['patient_id','ncd_id','timestamp','observation','systolic','diastolic',
                    'heart_beats','weight','glycemic_rate','bodyfat'],
                where: {
                    patient_id:patient_id
                }
            })
            .then(registers => res.status(200).send(registers));
    }
}
