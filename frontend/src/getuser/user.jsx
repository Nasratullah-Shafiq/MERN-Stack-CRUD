import React, {useEffect, useState} from 'react'
import axios from 'axios';
const User = ()=>{
    const [users, setUsers] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const result = await axios.get("http://localhost:8000/api/users");
                setUsers(result.data);
            }catch(error){
                console.log("error loading data", error);
            }
        };
        fetchData()
    },[]);
    return(
        <div className = "userTable">
            <button type="button" className="btn btn-primary"> Primary </button>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope='col'> No </th>
                        <th scope='col'> Name </th>
                        <th scope='col'> Email </th>
                        <th scope='col'> Address </th>
                        <th scope='col'> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index)=>{
                        return(
                            <tr>
                                <td> {index + 1} </td>
                                <td> {user.name} </td>
                                <td> {user.email} </td>
                                <td> {user.address} </td>
                                <td className="actionButtons"> 
                                    <button type="button" className="btn btn-info"> <i className='fa-solid fa-pen-to-square'></i> </button>
                                    
                                    <button type="button" className="btn btn-danger"> <i class="fa-solid fa-trash"></i>  </button></td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    )
};
export default User;