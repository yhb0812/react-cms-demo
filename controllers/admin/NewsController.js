const NewsService = require("../../services/admin/NewsService")


const NewsController = {
    add:async (req,res)=>{
        // console.log(req.file,req.body)
           
        const cover = req.file?`/newsuploads/${req.file.filename}`:""
        const {title,content,category,author,auditState,publishState,createTime,star,view,publishTime} = req.body
        //调用 service进行添加
        await NewsService.add({
            title,content,author,auditState,createTime,
            category:Number(category)
            ,
            publishState:Number(publishState),
            star:Number(star),
            view:Number(view),
            cover,
            publishTime:Number(publishTime),
            editTime:new Date()
        })
        res.send({
            ActionType:"OK"
        })
    },
    updateList:async(req,res)=>{
        const cover = req.file?`/newsuploads/${req.file.filename}`:""
        const {title,content,auditState,publishState,_id} = req.body
        //调用 service进行添加
        await NewsService.updateList({
            _id,
            auditState,
            publishState,
        })
        res.send({
            ActionType:"OK"
        })

    },
    getList:async (req,res)=>{
        // console.log(req.query)
        const {auditState,publishState,sort}=req.query
        const {id} = req.params
        const result =await NewsService.getList({auditState:Number(auditState),publishState:Number(publishState),id,sort})
        res.send({
            ActionType:"OK",
            data:result
        })
    },

    delList:async (req,res)=>{
        await NewsService.delList({_id:req.params.id})
        res.send({
            ActionType:"OK"
        })
    },

    publish:async (req,res)=>{
        await NewsService.publish({
            ...req.body,
            editTime:new Date()
        })
        res.send({
            ActionType:"OK",
        })
    }
}

module.exports = NewsController