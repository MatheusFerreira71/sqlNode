const Tech = require('../models/Tech');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: {
                association: 'techs',
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                }
            },
            attributes: ['id', 'name', 'email']
        });

        return res.json(user);
    },
    async store(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: "User not Found!" });
        }

        const [tech] = await Tech.findOrCreate({
            where: { name }
        });

        await user.addTech(tech);

        return res.json(tech);
    },
    async delete(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: "User not Found!" });
        }

        const tech = await Tech.findOne({
            where: { name }
        });

        await user.removeTech(tech);

        return res.json();
    }
};