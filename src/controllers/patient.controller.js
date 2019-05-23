import model from '../models';
import PatientToken from "../models/patient_token";
import PatientMonitoring from "../models/patient_monitoring";
import Register from "../models/register";

const {Patient, User} = model;

export default class PatientController {
    static create(req, res) {

        const {request_data} = req.body;
        const {email, sus_number, name, date_of_birth, gender, mothers_name, place_of_birth, address} = request_data;
        const {postcode, thoroughfare, number, complement, neighborhood, city, state} = address;

        User.findOne({where: {email: email}, attributes: ['id']})
            .then(user_data => {
                Patient.findOne({where: {user_id:user_data.id}})
                    .then(patient_data => {
                        if(patient_data){
                            res.status(200).send({
                                success: false,
                                message: 'Patient already registered',
                                code: 11,
                            });
                        }else{
                            Patient.create({
                                sus_number, user_id:user_data.id, name, date_of_birth, gender, mothers_name,
                                place_of_birth, postcode, thoroughfare, number, complement, neighborhood, city, state
                            }).then(patient_data => res.status(200).send({
                                success: true,
                                message: 'Patient registered successfully',
                                code: 0,
                                patient_data
                            })).catch(error => res.status(200).send({
                                success: false,
                                message: error,
                                code: 12
                            }));
                        }
                    })
                    .catch(error => res.status(200).send({
                        success: false,
                        message: error,
                        code: 13
                    }));
            })
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 14
            }));
    }
    static loadByUser(req, res){

        const {request_data} = req.body;
        const {email} = request_data;

        return User.findOne({where: {email}, attributes: ['id']})
            .then(userData => {
                Patient.findOne({where: {user_id: userData.id}})
                    .then(patient_data => {
                        if (patient_data) {
                            res.status(200).send({
                                success: true,
                                message: 'Patient loaded successfully',
                                code: 0,
                                patient_data
                            });
                        } else {
                            res.status(200).send({
                                success: false,
                                message: 'Patient not found',
                                code: 15
                            });
                        }
                    })
                    .catch(error => res.status(200).send({
                        success: false,
                        message: error,
                        code: 15,
                    }));
            })
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 16
            }));
    }
    static loadByToken(req, res){
        const {request_data} = req.body;
        const {sus_number, access_token} = request_data;

        return PatientToken.findOne({where:{patient_id:sus_number, access_token, valid:true}})
            .then(token_data => {
                if(token_data){
                    Patient.findOne({where: {sus_number}})
                        .then(patient_data => {
                            if (patient_data) {
                                const response = {
                                    success: true,
                                    message: 'Patient loaded successfully',
                                    code: 0,
                                    patient_data
                                };

                                PatientToken.update(
                                    {valid: false},
                                    {where: {patient_id:sus_number, access_token}}
                                );

                                PatientMonitoring.findAll({where:{patient_id:sus_number}, attributes: ['ncd_id']})
                                    .then(monitors => {
                                        response.monitors = monitors;
                                        Register.findAll({where:{patient_id:sus_number}})
                                            .then(registers => {
                                                response.registers = registers;
                                                res.status(200).send(response);
                                            });
                                    });
                            } else {
                                res.status(200).send({
                                    success: false,
                                    message: 'Patient not found',
                                    code: 16
                                });
                            }
                        })
                        .catch(error => res.status(200).send({
                            success: false,
                            message: error,
                            code: 17
                        }));
                }else{
                    res.status(200).send({
                        success: false,
                        message: 'Invalid access data',
                        code: 15
                    });
                }
            })
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 17
            }));
    }
    static load(req, res){
        const {request_data} = req.body;
        const {sus_number} = request_data;

        return Patient.findOne({where: {sus_number}})
            .then(patient_data => {
                if (patient_data) {
                    res.status(200).send({
                        success: true,
                        message: 'Patient loaded successfully',
                        code: 0,
                        patient_data
                    });
                } else {
                    res.status(200).send({
                        success: false,
                        message: 'Patient not found',
                        code: 16
                    });
                }
            })
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 17
            }));
    }
    static list(req, res){
        return Patient.findAll()
            .then(patients => res.status(200).send({
                success: true,
                message: 'Patients list loaded successfully',
                code: 0,
                patients
            }))
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 18
            }));
    }
}
