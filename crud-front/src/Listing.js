import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default function Listing() {

    const [data, setData] = useState([])
 


    useEffect(() => {

        getData()
    }, [])

    async function getData() {
        let result = await fetch('http://localhost:4000/user');
        result=await result.json()
        setData(result)
    }

    async function deleteUser(id){
        let result = await fetch(`http://localhost:4000/userdelete/${id}`,{
            method:'delete',
           
        })
        result=await result.json()
        if(result){
            
            alert('successfully deleted')
            getData()
        }
        console.log(result);
    }

    return (
        <div className='userlist'>
            <h1>User Data</h1>
            <Table>
                <thead>
                    <tr>
                    <th>S No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       data.map((item,i)=>
                   <tr key={i}>
                    <td>{i+1} </td>
                    <td>{item.name} </td>
                    <td>{item.email} </td>
                    <td>{item.mobile} </td>
                    <td>{item.address} </td>
                    <td>
                        <button onClick={()=>deleteUser(item._id)}>Delete</button>
                        <button ><Link to={'/update/'+item._id}>Edit</Link></button>
                        
                         </td>

                   </tr>
                       )
                    }
                </tbody>
            </Table>
        </div>
    )
}
