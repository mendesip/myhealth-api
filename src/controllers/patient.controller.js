import model from '../models';

const {Patient, User} = model;

export default class PatientController {
    static create(req, res) {
        const {email, sus_number, name, date_of_birth, gender, mothers_name, place_of_birth, address} = req.body;
        const {postcode, thoroughfare, number, complement, neighborhood, city, state} = address;
        User.findOne({
            where: {
                email: email
            },
            attributes: ['id']
        }).then(userData => {
            Patient.findOne({
                where: {
                    user_id:userData.id
                }
            }).then(patient_data => {
                if(patient_data){
                    res.status(200).send({
                        success: false,
                        message: 'Patient already registered',
                    });
                }else{
                    Patient.create({
                            sus_number, user_id:userData.id, name, date_of_birth, gender, mothers_name,
                            place_of_birth, postcode, thoroughfare, number, complement, neighborhood, city, state
                        })
                        .then(patient_data => res.status(200).send({
                            success: true,
                            message: 'Patient registered successfully',
                            patient_data
                        })).catch(error => res.status(200).send(error));
                }
            }).catch(error => res.status(200).send(error));
        }).catch(error => res.status(200).send(error));
    }
    static loadByUser(req, res){
        const {email} = req.body;
        return User.findOne({
            where: {
                email: email
            },
            attributes: ['id']
        }).then(userData => {
            Patient.findOne({
                where: {
                    user_id: userData.id
                }
            }).then(patient_data => {
                if (patient_data) {
                    res.status(200).send({
                        success: true,
                        message: 'Patient loaded successfully',
                        patient_data
                    });
                } else {
                    res.status(200).send({
                        success: false,
                        message: 'Patient not found',
                    });
                }
            })
        }).catch(error => res.status(200).send(error));
    }
    static load(req, res){
        const {sus_number} = req.body;
        return Patient.findOne({
            where: {
                sus_number: sus_number
            }
        }).then(patient_data => {
                if (patient_data) {
                    res.status(200).send({
                        success: true,
                        message: 'Patient loaded successfully',
                        patient_data
                    });
                } else {
                    res.status(200).send({
                        success: false,
                        message: 'Patient not found',
                    });
                }
            }).catch(error => res.status(200).send(error));
    }
    static list(req, res){
        return Patient.findAll()
            .then(patients => res.status(200).send(patients))
            .catch(error => res.status(200).send(error));
    }
}
