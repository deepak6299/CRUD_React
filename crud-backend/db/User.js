const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    mobile:String,
    address:String
})

module.exports=mongoose.model('users',userSchema)