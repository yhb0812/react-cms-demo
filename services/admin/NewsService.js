const NewsModel = require("../../models/NewsModel")


const NewsService = {
    add:async ({title,content,category,author,auditState,publishState,createTime,star,view,publishTime})=>{
        return NewsModel.create({
            title,content,category,author,auditState,publishState,createTime,star,view,publishTime
        })
    },

    updateList:async({_id,title,content,category,isPublish,cover,editTime,auditState,publishState})=>{
        if(cover){
            return NewsModel.updateOne({_id},{
                title,content,category,isPublish,cover,editTime
            })
        }else{
            return NewsModel.updateOne({_id},{
                title,content,category,isPublish,editTime,auditState,publishState
            })
        }
    },

    getList:async ({auditState,publishState,id,sort})=>{
        if(id) return NewsModel.find({_id:id})
        else if(sort==="view") return NewsModel.find({ publishState: 2 }).sort({ view: -1 }).limit(6)
        else if(sort==="star") return NewsModel.find({ publishState: 2 }).sort({ star: -1 }).limit(6)
        else if(publishState)
            return NewsModel.find({publishState})
        else return NewsModel.find()
        
    },
    delList:async ({_id})=>{
        return NewsModel.deleteOne({
            _id
        })
    },

    publish:async ({_id,isPublish,editTime})=>{
        return NewsModel.updateOne({
            _id
        },{
            isPublish,
            editTime
        })
    }
}

module.exports = NewsService