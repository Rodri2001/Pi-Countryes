const {Country,Activity} = require("../db")



const getCountriesDetail = async (req,res) =>{
    try {
        const {id} = req.params
        console.log(id,9)
        if(id){
        let countriesdb = await Country.findOne({
            where:{ id:id},
            include: Activity
        })
        res.send(countriesdb)
    }
    } catch (error) {
        console.log(error)
        res.send('No existe id del pais 🌎')
    }
}

module.exports = {
    getCountriesDetail
}