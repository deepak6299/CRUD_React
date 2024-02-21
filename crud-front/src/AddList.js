import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddList() {

  const[name,setName]=useState(" ");
  const[email,setEmail]=useState(" ");
  const[mobile,setMobile]=useState(" ");
  const[address,setAddress]=useState(" ");
const navigate=useNavigate()

async function funcalled(){
  console.log(name,email,mobile,address);

 let result=await fetch("http://localhost:4000/add",{
  method:'post',
  body:JSON.stringify({name,email,mobile,address}),
  headers:{
    'Content-Type':'application/json'
  }
 })
 result=await result.json()
if(result){
  navigate('/')
}
 console.log(result);

}


  return (
    <div className='addlist'>
      <h2>Add list</h2>
      <input type='text' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
      <input type='text' placeholder='Enter  email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type='text' placeholder='Enter  mobile' onChange={(e)=>setMobile(e.target.value)}/>
      <input type='text' placeholder='Enter  address' onChange={(e)=>setAddress(e.target.value)}/>

      <button onClick={funcalled}>Add</button>
    </div>
  )
}
