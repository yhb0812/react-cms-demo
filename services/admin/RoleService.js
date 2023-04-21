const RoleModel = require("../../models/RoleModel")


const RoleService = {
    getRole: async () => {
        return RoleModel.find()
    },

}

// {}, (err, roles) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(roles);
// }

module.exports = RoleService