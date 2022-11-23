const axios = require('axios');
require('dotenv').config();
const {
    ENV_URL
} = process.env;
const {
    Country,
} = require("../db")


const getAllCountriesInDb = async (req, res) => {
    try {
        await axios.get(ENV_URL)
            .then(async (resp) => {  
                resp.data.forEach(async (e) => {
                    await Country.findOrCreate({
                        where: {
                            codigo: e.cca3,
                            name: e.name.common,
                            continent: e.continents[0],
                            imgflag: e.flags[0],
                            subregion: e.subregion || 'No subregion 🤷‍♂️',
                            capital: e.capital?.join() || "No capital",
                            area: e.area ? Number(e.area) : 0 ,
                            population: e.population || 0,
                        }
                    })
                })
            })
    } catch (error) {
        console.log(error, 2)
        res.send('parece que fallo jaja 🌎')
    }

}


module.exports = {
    getAllCountriesInDb
}