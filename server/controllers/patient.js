import model from '../models';

const {patient } = model;

export default class Patient {
    static create(req, res) {
        const {userId, susNumber, dateOfBirth, gender, mothersName, placeOfBirth,
               postalCode, thoroughfare, number, neighborhood, city, state} = req.body;
        return patient
            .create({
                userId, susNumber, dateOfBirth, gender, mothersName, placeOfBirth,
                postalCode, thoroughfare, number, neighborhood, city, state
            })
            .then(userData => res.status(201).send({
                success: true,
                message: 'User registered successfully',
                userData
            }))
    }
    static load(req, res){
        const {sus_number, password} = req.body;
        return patient
            .create({
                sus_number,
                password
            })
            .then(patientData => res.status(201).send({
                success: true,
                message: 'User logged successfully',
                patientData
            }))
    }
    static exclude(req, res){
        const {sus_number, password} = req.body;
        return patient
            .create({
                sus_number,
                password
            })
            .then(patientData => res.status(201).send({
                success: true,
                message: 'User excluded successfully',
                patientData
            }))
    }
}
