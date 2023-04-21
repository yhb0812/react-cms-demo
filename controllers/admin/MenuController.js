const MenuService = require("../../services/admin/MenuService")
const JWT = require("../../util/JWT")

const MenuController = {
    getMenu: async (req, res) => {
        //req.body 
        var result = await MenuService.getMenu({role:req.params.role})
        if (result.length === 0) {
            res.send({
                code: "-1",
                error: "无访问权限"
            })
        } else {

            
            res.send({
                ActionType: "OK",
                data: result[0]
            })
        }
    },
}

module.exports = MenuController