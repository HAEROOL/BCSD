import React,{useRef, useState} from "react";
import UserList from "./UserLust";
import CreateUser from "./createUser";
import './App.css';
function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  })

  const {username, email} = inputs
  const onChange = e =>{
    const {name, value} = e.target
    setInputs({
      ...inputs,
      [name] : value
    })
  }
  const [users, setUsers] = useState([
    {
      id : '1',
      username : 'a',
      email : 'a@teest.com',
      online: true
    },
    {
      id : '2',
      username : 'b',
      email : 'b@teest.com',
      online: false
    },
    {
      id : '3',
      username : 'c',
      email : 'c@teest.com',
      online: false
    }
  ])

  const nextId = useRef(4)
  const onCreate = () =>{
    const user = {
      id:nextId.current,
      username,
      email
    }
    setUsers([...users,user])
    //setUsers(users.concat(user))

    setInputs({
      username:'',
      email:''
    })
    console.log(nextId.current)
    nextId.current += 1
  }

  const onRemove = id =>{
    setUsers(users.filter(user => user.id !== id))
  }

  const onToggle = id =>{
    setUsers(users.map(
      user => user.id === id
        ? {...user, online: !user.online} : user
    ))
  }
  return (
    <>
      <CreateUser
        username = {username}
        email = {email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
