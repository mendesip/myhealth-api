import model from '../models';

const { ncd } = model;

export default class NCD {
    static create(req, res) {
        const {type} = req.body;
        return ncd.create({
            type
            }).then(ncdData => res.status(201).send({
                success: true,
                message: 'NCD registered successfully',
                ncdData
            })).catch(error => res.status(400).send(error));
    }

    static delete(req, res){
        const {id} = req.body;
        return ncd.findOne({
            where: {
                id: id
            }
        }).then((ncdData) => {
            if (ncdData !== null) {
                ncdData.destroy().catch(error => res.status(400).send(error));
                res.status(201).send({
                    success: true,
                    message: 'NCD deleted successfully',
                    ncdData
                })
            }else{
                res.status(200).send({
                    success: false,
                    message: 'NCD not registered',
                });
            }
        }).catch(error => res.status(400).send(error));
    }
    static list(req, res){
        return ncd
            .findAll({
                attributes: ['id', 'type']
            })
            .then(ncds => res.status(200).send(ncds))
            .catch(error => res.status(400).send(error));
    }
}
