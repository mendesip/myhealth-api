import model from '../models';


const { PatientMonitoring, Frequency } = model;

export default class PatientMonitoringController {
    static create(req, res) {

        const {request_data} = req.body;
        const {patient_id, ncd_id, frequency_id} = request_data;

        return PatientMonitoring.create({patient_id, ncd_id, frequency_id})
            .then(monitor_data => res.status(200).send({
                success: true,
                message: 'Monitoring registered successfully',
                code: 0,
                monitor_data
            }))
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 28,
            }));
    }

    static delete(req, res){

        const {request_data} = req.body;
        const {patient_id, ncd_id} = request_data;

        return PatientMonitoring.findOne({where: {patient_id, ncd_id}})
            .then((monitor_data) => {
                if (monitor_data !== null) {
                    monitor_data.destroy().catch(error => res.status(200).send(error));
                    res.status(201).send({
                        success: true,
                        message: 'Monitoring deleted successfully',
                        code: 0,
                        monitor_data
                    });
                }else{
                    res.status(200).send({
                        success: false,
                        message: 'Monitoring not registered',
                        code: 29
                    });
                }
            })
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 30
            }));
    }
    static listByPatient(req, res){
        const {request_data} = req.body;
        const {sus_number} = request_data;

        return PatientMonitoring
            .findAll({where:{patient_id:sus_number}})
            .then(monitoring => {
                monitoring.forEach(monitor => {
                    Frequency.findOne({where: {id: monitor.frequency_id}})
                        .then(frequency => {
                            if(frequency !== null){
                                monitor.frequency = frequency;
                            }
                        })
                        .catch(error => res.status(200).send({
                            success: false,
                            message: error,
                            code: 31
                        }));
                });
                res.status(200).send({
                    success: true,
                    message: 'Monitoring list loaded successfully',
                    code: 15,
                    monitoring
                }
            )})
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 31
            }));
    }
    static list(req, res){
        return PatientMonitoring
            .findAll()
            .then(monitoring => res.status(200).send({
                success: true,
                message: 'Monitoring list loaded successfully',
                code: 15,
                monitoring
            }))
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 31
            }));
    }
}
