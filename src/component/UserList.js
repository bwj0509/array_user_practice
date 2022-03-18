import React from "react";

function UserList({ users, onRemove }){
    return(
        <div>
            <table className="border">
                <tr className="border">
                    <th className="border">Id</th>
                    <th className="border">Username</th>
                    <th className="border">Email</th>
                    <th className="border">비고</th>
                    
                </tr>
                    {users.map((users, index)=>(
                        <tr>
                            <td>{users.id}</td>
                            <td>{users.username}</td>
                            <td>{users.email}</td>
                            <td><button onClick={() => onRemove(users.id) }>삭제</button></td>
                        </tr>
                    ))}
            </table>
        </div>
    )
}
export default UserList