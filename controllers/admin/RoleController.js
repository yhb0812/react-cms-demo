const RoleService = require("../../services/admin/RoleService")
const JWT = require("../../util/JWT")

const RoleController = {
    getRole: async (req, res) => {
        //req.body 
        var result = await RoleService.getRole()
        if (result.length === 0) {
            res.send({
                code: "-1",
                error: "无访问权限"
            })
        } else {

            
            res.send({
                ActionType: "OK",
                data: result
            })
        }
    },
}

module.exports = RoleController