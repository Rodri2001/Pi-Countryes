const { Op } = require("sequelize")
const { Activity } = require("../db")


const getActivitys = async (req, res) => {
    try {
        const activitys = await Activity.findAll()              
        res.send(activitys)
    } catch (error) {
        console.log(error)
        res.send('No se encontro Actividad')
    }
}

module.exports = {
    getActivitys
}