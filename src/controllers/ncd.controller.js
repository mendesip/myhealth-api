import model from '../models';

const { NCD } = model;

export default class NCDController {
    static create(req, res) {
        const {type} = req.body;
        return NCD.create({
            type
            }).then(ncdData => res.status(201).send({
                success: true,
                message: 'NCDController registered successfully',
                ncdData
            })).catch(error => res.status(400).send(error));
    }

    static delete(req, res){
        const {id} = req.body;
        return NCD.findOne({
            where: {
                id: id
            }
        }).then((ncdData) => {
            if (ncdData !== null) {
                ncdData.destroy().catch(error => res.status(400).send(error));
                res.status(201).send({
                    success: true,
                    message: 'NCDController deleted successfully',
                    ncdData
                })
            }else{
                res.status(200).send({
                    success: false,
                    message: 'NCDController not registered',
                });
            }
        }).catch(error => res.status(400).send(error));
    }
    static list(req, res){
        return NCD
            .findAll({
                attributes: ['id', 'type']
            })
            .then(ncds => res.status(200).send(ncds))
            .catch(error => res.status(400).send(error));
    }
}
