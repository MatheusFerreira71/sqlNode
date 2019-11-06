const User = require('../models/User');

const { Op } = require('sequelize');


module.exports = {
    async show(req, res) {
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%hotmail.com'
                }
            },
            include: [
                {
                    association: 'adresses',
                    where: {
                        street: 'Avenida Doutor Ismael Alonso Y. Alonso'
                    },
                    attributes: ['number', 'street']
                },
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    },
                    attributes: ['name'],
                    through: { attributes: [] }
                }
            ]
        });

        return res.json(users);
    }
};