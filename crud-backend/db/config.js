const mongoose=require('mongoose');
try{
    mongoose.connect('mongodb://127.0.0.1:27017/CRUD')
    console.log("connected");
}catch(err){
console.log(err);
}