import model from '../models';
import crypto from 'crypto';

const { PatientToken, Patient} = model;

export default class PatientTokenController {

    static newAccessToken(){
        let chars = 'ABCDEFGHIJKLMNOPQRSTUWXYZ0123456789';
        let random = crypto.randomBytes(6);
        let value = new Array(6);
        let d = 256/chars.length;
        for(const i in random){
            value[i] = chars[Math.floor(random[i]/d)];
        }
        return value.join('');
    }

    static load(req, res) {

        const {request_data} = req.body;
        const {sus_number} = request_data;

        return Patient.findOne({where: {sus_number}})
            .then(patient_data => {
                if(patient_data){
                    PatientToken.findOne({where: {patient_id:sus_number, valid:true}, attributes: ['access_token']})
                        .then(token_data => {
                            if(token_data) {
                                res.status(200).send({
                                    success: true,
                                    message: 'Token access loaded successfully',
                                    code: 0,
                                    token_data
                                });
                            }else{
                                PatientToken.create({patient_id:sus_number, access_token:PatientTokenController.newAccessToken(), valid: true})
                                    .then(token_data => res.status(200).send({
                                        success: true,
                                        message: 'Token access loaded successfully',
                                        code: 0,
                                        token_data
                                    }))
                                    .catch(error => res.status(200).send({
                                        success: false,
                                        message: error,
                                        code: 12
                                    }));
                            }
                        })
                        .catch(error => res.status(200).send({
                            success: false,
                            message: error,
                            code: 12
                        }));
                }else{
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
                code: 28,
            }));
    }
}
