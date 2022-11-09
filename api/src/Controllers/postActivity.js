const {
    Country,
    Activity
} = require("../db");

const postActivity = async (req, res) => {
    try {
        const {
            name,
            difficulty,
            duration,
            season,
            countryIds
        } = req.body

        let dbactivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        })

        countryIds.forEach(async id => {
            const findcountry = await Country.findOne({
                where: {
                    id: id,
                },
            })
    
            findcountry.addActivity(dbactivity)
        })


        res.send("Added activities")

    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    postActivity
}