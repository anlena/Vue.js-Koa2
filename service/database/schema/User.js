const mongoose = require('mongoose');   //引入mongooose
const Schema = mongoose.Schema;         //声明Schema
let ObjectId = Schema.Types.ObjectId;   //声明object类型

//创建我们的用户shcema
const userSchema = new Schema({
  UserId:ObjectId,
  userName:{unique:true,type:String},
  password:String,
  created:String,
  createAt:{type:Date,default:Date.now()},
  lastLoginAt:{type:Date,default:Data.now()}
});

//发布模型
mongoose.model('User',userSchema);