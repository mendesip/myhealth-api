import model from '../models';

const { patient_monitor } = model;

export default class PatientMonitor {
    static create(req, res) {
        const {patient_id, ncd_id, frequency_id} = req.body;
        return patient_monitor.create({
            patient_id, ncd_id, frequency_id
            }).then(monitor_data => res.status(201).send({
                success: true,
                message: 'Monitoring registered successfully',
                monitor_data
            })).catch(error => res.status(400).send(error));
    }

    static delete(req, res){
        const {patient_id, ncd_id} = req.body;
        return patient_monitor.findOne({
            where: {
                patient_id: patient_id,
                ncd_id: ncd_id
            }
        }).then((monitor_data) => {
            if (monitor_data !== null) {
                monitor_data.destroy().catch(error => res.status(400).send(error));
                res.status(201).send({
                    success: true,
                    message: 'Monitoring deleted successfully',
                    monitor_data
                })
            }else{
                res.status(200).send({
                    success: false,
                    message: 'Monitoring not registered',
                });
            }
        }).catch(error => res.status(400).send(error));
    }
    static list(req, res){
        return patient_monitor
            .findAll()
            .then(monitor_data => res.status(200).send(monitor_data))
            .catch(error => res.status(400).send(error));
    }
}
