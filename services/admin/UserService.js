const UserModel = require("../../models/UserModel")


const UserService = {
    login:async({username,password})=>{
        return UserModel.find({
            username,
            password,
        })
    },

    upload:async ({_id,username,introduction,gender,avatar})=>{
        if(avatar){
            return UserModel.updateOne({
                _id
            },{
                username,introduction,gender,avatar
            })
        }else{
            return UserModel.updateOne({
                _id
            },{
                username,introduction,gender
            })
        }
    },

    add:async ({username, introduction, avatar, role, password, region, roleState,roleName})=>{
        return UserModel.create({
            username, introduction, avatar, role, password, region, roleState,roleName
        })
    },

    getList:async ()=>{
        return UserModel.find()
    },
    putList:async(body)=>{
        return UserModel.updateOne({_id:body._id},body)
    },
    delList:async ({_id})=>{
        return UserModel.deleteOne({_id})
    }
}

module.exports = UserService