import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateList() {

  const[name,setName]=useState(" ");
  const[email,setEmail]=useState(" ");
  const[mobile,setMobile]=useState(" ");
  const[address,setAddress]=useState(" ");
const params=useParams()
const navigate=useNavigate()

useEffect(()=>{
  console.log(params);
  updateUserlist()
},[])

  async function updateUserlist(){
    console.log(name,email,mobile,address);
    let result= await fetch(`http://localhost:4000/getsingleData/${params.id}`)

    result=await result.json()
    console.log(result);
    setName(result.name)
    setEmail(result.email)
    setMobile(result.mobile)
    setAddress(result.address)
  }


  async function updatelist(){
    let result=await fetch(`http://localhost:4000/update/${params.id}`,{
      method:"put",
  body:JSON.stringify({name,email,mobile,address}),
  headers:{
    'Content-Type':'application/json'
  }
    })
  result =await result.json()
  if(result){
navigate('/')
  }
  console.log(result);
  }

  return (
    <div className='updatelist'>
      <h2>Update list</h2>
       <input type='text' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} value={name}/>

      <input type='text' placeholder='Enter  email' onChange={(e)=>setEmail(e.target.value)} value={email}/>

      <input type='text' placeholder='Enter  mobile' onChange={(e)=>setMobile(e.target.value)} value={mobile}/>

      <input type='text' placeholder='Enter  address' onChange={(e)=>setAddress(e.target.value)} value={address}/>

      <button onClick={updatelist}>Save Edit</button>
    </div>
  )
}
