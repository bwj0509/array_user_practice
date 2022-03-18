import './App.css';
import React, { useState, useRef } from 'react';
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
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'lizios',
      email: 'liz@example.com'
    },
    {
      id: 4,
      username: 'woojin',
      email: 'bwj0509@example.com'
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
    setUsers(users.filter((user)=> user.id !== id))
  }

  

  return (
   <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
    <UserList users={users} onRemove={onRemove}/>
   </>

  );
}

export default App;




