import model from '../models';

const { NCD } = model;

export default class NCDController {
    static create(req, res) {

        const {request_data} = req.body;
        const {type} = request_data;

        return NCD.create({type})
            .then(ncd_data => res.status(201).send({
                success: true,
                message: 'NCDController registered successfully',
                code: 0,
                ncdData: ncd_data
            }))
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 19
            }));
    }

    static delete(req, res){
        const {request_data} = req.body;
        const {id} = request_data;

        return NCD.findOne({where: {id: id}})
            .then((ncd_data) => {
                if (ncd_data !== null) {
                    ncd_data.destroy().catch(error => res.status(200).send(error));
                    res.status(201).send({
                        success: true,
                        message: 'NCDController deleted successfully',
                        code: 0,
                        ncd_data
                    })
                }else{
                    res.status(200).send({
                        success: false,
                        message: 'NCDController not registered',
                        code: 20
                    });
                }
            })
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 21
            }));
    }
    static list(req, res){
        return NCD
            .findAll({attributes: ['id', 'type']})
            .then(ncds => res.status(200).send({
                success: true,
                message: 'NCDs list loaded successfully',
                code: 15,
            }))
            .catch(error => res.status(200).send({
                success: false,
                message: error,
                code: 22,
            }));
    }
}
