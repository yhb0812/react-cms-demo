
const mongoose  = require("mongoose")
const Schema = mongoose.Schema
// user模型===>users集合

const RightsType = {
    role:String,
    rights:Array
}
const RightsModel = mongoose.model("rights",new Schema(RightsType))

module.exports = RightsModel