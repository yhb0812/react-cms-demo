
const mongoose = require("mongoose")
const Schema = mongoose.Schema
// user模型===>users集合

const NewsType = {
    title: String,
    content: String,
    author: String,
    auditState: Number,
    publishState: Number,
    createTime: Number,
    star: Number,
    view: Number,
    publishTime: Number
}
const NewsModel = mongoose.model("news", new Schema(NewsType))

module.exports = NewsModel