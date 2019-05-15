import model from '../models';

const {Patient, User} = model;

export default class PatientController {
    static create(req, res) {
        const {email, sus_number, name, date_of_birth, gender, mothers_name, place_of_birth, address} = req.body;
        const {postal_code, thoroughfare, number, complement, neighborhood, city, state} = address;
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
                    res.status(201).send({
                        success: false,
                        message: 'Patient already registered',
                    });
                }else{
                    Patient
                        .create({
                            sus_number, user_id:userData.id, name, date_of_birth, gender, mothers_name,
                            place_of_birth, postcode:postal_code, thoroughfare, number, complement, neighborhood, city, state
                        })
                        .then(patient_data => res.status(201).send({
                            success: true,
                            message: 'Patient registered successfully',
                            patient_data
                        }));
                }
            });
        });
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
                    res.status(201).send({
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
        }).catch(error => res.status(400).send(error));
    }
    static load(req, res){
        const {sus_number} = req.body;
        return Patient.findOne({
            where: {
                sus_number: sus_number
            }
        }).then(patient_data => {
                if (patient_data) {
                    res.status(201).send({
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
            });
    }
    static list(req, res){
        return Patient
            .findAll()
            .then(patients => res.status(200).send(patients))
            .catch(error => res.status(400).send(error));
    }
}
