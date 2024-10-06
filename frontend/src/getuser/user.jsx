import React from 'react'

const User = ()=>{
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
                    <tr>
                        <td> 1 </td>
                        <td> Nasratullah Shafiq </td>
                        <td> Email </td>
                        <td> Address </td>
                        <td className="actionButtons"> 
                            <button type="button" className="btn btn-info"> <i className='fa-solid fa-pen-to-square'></i> </button>
                            
                            <button type="button" className="btn btn-danger"> <i class="fa-solid fa-trash"></i>  </button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};
export default User;