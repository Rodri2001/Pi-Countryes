const {Op} = require("sequelize")
const {Country,Activity} = require("../db")

const getCountries = async (req, res) => {
    try {
        const {name} = req.query
        if (!name) {
            let countriesdb = await Country.findAll({
                include: Activity
            })                
            res.send(countriesdb)
               
        } else {
            let countriesdb = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`,
                    },
                },
                include: Activity
            })
            res.send(countriesdb)
        }
    } catch (error) {
        console.log(error, "xd")
    }
}

module.exports = {
    getCountries
}