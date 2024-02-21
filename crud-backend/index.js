const express=require('express');
require('./db/config')
const User=require('./db/User')
const cors =require('cors')
const app=express();


app.use(cors())
app.use(express.json())


app.post('/add',async(req,resp)=>{
  const user= new User(req.body)
 let result=await user.save()
    resp.send(result)
})

app.get('/user',async(req,resp)=>{
  let result=await User.find()
  resp.send(result)
})

app.delete('/userdelete/:id',async(req,resp)=>{
  let result=await User.deleteOne({_id:req.params.id});
  resp.send(result)
})

app.get('/getsingleData/:id',async(req,resp)=>{
  let result=await User.findOne({_id:req.params.id})
  resp.send(result)
})

app.put('/update/:id',async(req,resp)=>{
  let result=await User.updateOne({_id:req.params.id},{
    $set:req.body
  })
  resp.send(result)
})


app.listen(4000);