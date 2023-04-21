const MenuModel = require("../../models/RightsModel")


const MenuService = {
    getMenu: ({role})=>{
        return MenuModel.find({role})
    },
   
}


module.exports = MenuService