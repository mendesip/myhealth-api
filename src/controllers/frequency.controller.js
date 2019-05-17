import model from '../models';

const { Frequency } = model;

export default class FrequencyController {
    static create(req, res) {

        const {request_data} = req.body;
        const {type, days_of_week, custom_every, times_a_day, hours_of_day, start_date} = request_data;

        return Frequency.create({type, days_of_week, custom_every, times_a_day, hours_of_day, start_date})
            .then(frequency_data => res.status(200).send({
                success: true,
                message: 'FrequencyController registered successfully',
                code: 0,
                frequency_id: frequency_data.id
            }))
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 23
            }));
    }

    static delete(req, res){

        const {request_data} = req.body;
        const {id} = request_data;

        return Frequency.findOne({where: {id: id}})
            .then((frequency_data) => {
                if (frequency_data !== null) {
                    frequency_data.destroy().catch(error => res.status(200).send({
                        success: false,
                        message: error,
                        code: 24
                    }));
                    res.status(200).send({
                        success: true,
                        message: 'FrequencyController deleted successfully',
                        code: 0,
                        frequency_data
                    })
                }else{
                    res.status(200).send({
                        success: false,
                        message: 'FrequencyController not registered',
                        code: 25
                    });
                }
            })
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 26,
            }));
    }
    static list(req, res){
        return Frequency
            .findAll({attributes: ['type','days_of_week','custom_every','times_a_day','hours_of_day','start_date']})
            .then(frequencies => res.status(200).send({
                success: true,
                message: "Frequencies list loaded successfully",
                code: 0,
                frequencies
            }))
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 27,
            }));
    }
}
