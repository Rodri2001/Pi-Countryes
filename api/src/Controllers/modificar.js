const { where } = require("sequelize")
const {Country,Activity} = require("../db")


const edit = async (req,res) => {
    try {
        const {id} = req.params
        console.log(id ,22)
        
        const actividad = await Activity.destroy({
         where : {
          id : id
         }
        })
       res.send("eliminado")
      
    } catch (error) {
        console.log(error)
    }
}


module.exports = { edit}