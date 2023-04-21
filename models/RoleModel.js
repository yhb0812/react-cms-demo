
const mongoose  = require("mongoose")
const Schema = mongoose.Schema


const RoleType = {
    roleName:String,
    role:String,
}
const RoleModel = mongoose.model("roles",new Schema(RoleType))

module.exports = RoleModel