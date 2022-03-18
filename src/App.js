import './App.css';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import UserList from './component/UserList';
import CreateUser from './component/CreateUser';

function App() {

  const [ inputs, setInputs ] = useState({
    username :'',
    email:''
  })

  const { username, email } = inputs


  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active : true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active : false
    },
    {
      id: 3,
      username: 'lizios',
      email: 'liz@example.com',
      active : false
    },
    {
      id: 4,
      username: 'woojin',
      email: 'bwj0509@example.com',
      active : false
    }
  ]);

  const onChange = (e) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  const nextId = useRef(5)
  
  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email
    }
    setUsers([
      ...users,
      user
    ]) // spread연산자 사용하거나 concat사용해서 할 수 있음
    
    nextId.current += 1
  }

  const onRemove = (id) =>{
    setUsers(users.filter( (user) => user.id !== id) )
  }

  const onToggle = (id) =>{
    setUsers(
      users.map((user) => (
        user.id == id ? {...user, active: !user.active } : user
      ))
    )
    
  }
  
  function countActiveUsers(users){
    console.log('활성 사용자 수를 세는중...')
    return users.filter((user) => user.active).length
  }
  const count = useMemo(() => countActiveUsers(users),[users])
  //useMemo사용하여 성능 최적화 시키기!
  // userMemo를 선언하고 두번째 파라미터는 배열로 사용하고 변화하게 되면 첫번째 파라미터를 실행시키는 의미
  // 따라서 배열에 정해진 값만 체크해서 재랜더링 시키기에 성능 최적화가 가능하다.

  return (
   <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    <div>활성 사용자수 : {count}</div>
   </>

  );
}

export default App;




