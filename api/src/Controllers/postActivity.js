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

        countryIds.forEach(async id => {

            let dbactivity = await Activity.create({
                name,
                difficulty,
                duration,
                season,
            })

            const findcountry = await Country.findOne({
                where: {
                    id: id,
                },
                include : Activity
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