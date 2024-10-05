import React from 'react'

const User = ()=>{
    return(
        <div className = "userTable">
            <button type="button" calssName="btn btn-primary"> Primary </button>
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
                        <td> Actions </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};
export default User;