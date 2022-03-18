import React, { useEffect } from "react";

function UserList({ users, onRemove, onToggle }){

    // useEffect( () => {
    //     console.log('user값이 설정됨');
    //     console.log(users);

    //     return () => { /*useEffect를 사용할때 return은 cleanup의 개념을 가진다*/ 
    //         console.log('user가 바뀌기전..');
    //         console.log(users);
    //     }
    // },[users])

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
                        <tr key={index}>
                            <td>{users.id}</td>
                            <td onClick={()=>onToggle(users.id)} style={{
                                cursor : 'pointer',
                                color: users.active ? 'green': 'black'
                            }}>
                                {users.username}
                            </td>
                            <td>{users.email}</td>
                            <td><button onClick={() => onRemove(users.id) }>삭제</button></td>
                        </tr>
                    ))}
            </table>
        </div>
    )
}
export default UserList