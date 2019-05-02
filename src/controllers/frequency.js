import model from '../models';

const { frequency } = model;

export default class Frequency {
    static create(req, res) {
        const {type, days_of_week, custom_every, times_a_day, hours_of_day, start_date} = req.body;
        return frequency.create({
            type, days_of_week, custom_every, times_a_day, hours_of_day, start_date
            }).then(frequencyData => res.status(201).send({
                success: true,
                message: 'Frequency registered successfully',
                frequency_id: frequencyData.id
            }));
    }

    static delete(req, res){
        const {id} = req.body;
        return frequency.findOne({
            where: {
                id: id
            }
        }).then((frequency_data) => {
            if (frequency_data !== null) {
                frequency_data.destroy().catch(error => res.status(400).send(error));
                res.status(201).send({
                    success: true,
                    message: 'Frequency deleted successfully',
                    frequency_data
                })
            }else{
                res.status(200).send({
                    success: false,
                    message: 'Frequency not registered',
                });
            }
        }).catch(error => res.status(400).send(error));
    }
    static list(req, res){
        return frequency
            .findAll({
                attributes: ['type','days_of_week','custom_every','times_a_day','hours_of_day','start_date']
            })
            .then(frequencies => res.status(200).send(frequencies))
            .catch(error => res.status(400).send(error));
    }
}
