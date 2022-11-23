const { Op } = require("sequelize")
const {
    Country,
    Activity
} = require("../db");

const postActivity = async (req, res) => {
    try {
        const { name, difficulty, duration, season, countryIds } = req.body

        countryIds.forEach(async id => {
            // let [dbactivity, created] = await Activity.findOrCreate({
            //     where: {
            //         name: name,
            //     },
            //     defaults: {
            //         difficulty: difficulty,
            //         duration: duration,
            //         season: season,
            //   
            //     }
            // })
            let dbactivity = await Activity.create({
                    name: name,
                    difficulty: difficulty,
                    duration: duration,
                    season: season,
            })

            

            const findcountry = await Country.findOne({
                where: {
                    name: id,
                },
            })

            findcountry.addActivity(dbactivity)
            console.log(findcountry, "xdxd")
        })

        res.send("Added activities")

    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    postActivity
}