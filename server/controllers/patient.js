import model from '../models';

const {patient, user} = model;

export default class Patient {
    static create(req, res) {
        const {email, susNumber, name, dateOfBirth, gender, mothersName, placeOfBirth, address} = req.body;
        const {postCode, thoroughfare, number, neighborhood, city, state} = address;
        user.findOne({
            where: {
                email: email
            },
            attributes: ['id']
        }).then(userData => {
            patient.findOne({
                where: {
                    user_id:userData.id
                }
            }).then(patientData => {
                if(patientData){
                    res.status(201).send({
                        success: false,
                        message: 'Patient already registered',
                    });
                }else{
                    patient
                        .create({
                            sus_number:susNumber, user_id:userData.id, name, date_of_birth:dateOfBirth, gender, mothers_name:mothersName, place_of_birth:placeOfBirth,
                            postal_code:postCode, thoroughfare, number, neighborhood, city, state
                        })
                        .then(patientData => res.status(201).send({
                            success: true,
                            message: 'Patient registered successfully',
                            patientData
                        })).catch(error => res.status(400).send(error));
                }
            }).catch(error => res.status(400).send(error));
        }).catch(error => res.status(400).send(error));
    }
    static load(req, res){
        const {susNumber} = req.body;
        return patient.findOne({
            where: {
                sus_number: susNumber
            }
        }).then(patientData => {
                if (patientData) {
                    res.status(201).send({
                        success: true,
                        message: 'Patient loaded successfully',
                        patientData
                    });
                } else {
                    res.status(200).send({
                        success: false,
                        message: 'Patient not found',
                    });
                }
            }).catch(error => res.status(400).send(error));
    }
    static list(req, res){
        return patient
            .findAll()
            .then(patients => res.status(200).send(patients))
            .catch(error => res.status(400).send(error));
    }
}
