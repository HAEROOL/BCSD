import React,{useRef, useState, useMemo, useCallback} from "react";
import UserList from "./UserList";
import CreateUser from "./createUser";
import './App.css';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...')
  return users.filter(user => user.online).length
}
function App() {
  const [inputs, setInputs] = useState({
    username : '',
    email : '',
    online: false
  })
  const {username, email} = inputs
  const onChange = useCallback(e =>{
    const {name, value} = e.target
    setInputs({
      ...inputs,
      [name]:value
    })
  }, [inputs])
  const [users,setUsers] = useState([
    {
      id : '1',
      username : 'abcd',
      email : 'a@teest.com',
      online: true
    },
    {
      id : '2',
      username : 'asdf',
      email : 'b@teest.com',
      online: false
    },
    {
      id : '3',
      username : 'zxcv',
      email : 'c@teest.com',
      online: false
    }
  ])

  const nextId = useRef(4)

  const onCreate = useCallback(() =>{
    const user = {
      id : nextId.current,
      username,
      email
    }
    // setUsers([...users,user])
    setUsers(users => users.concat(user))
    setInputs({
      username : '',
      email : ''
    })
    console.log(nextId.current)
    nextId.current += 1
  }, [username, email])

  const onRemove = useCallback((id) =>{
    setUsers(users.filter(user => user.id !== id))
  }, [])

  const onToggle = useCallback((id) =>{
    setUsers(users => users.map(
      user => user.id === id ? 
        {...user, online: !user.online}
        :user
    ))
  }, [])
  const count = useMemo(() => countActiveUsers(users), [users])
  return (
    <>
      <CreateUser
        username = {username}
        email = {email}
        onChange = {onChange}
        onCreate = {onCreate}
        />
      <UserList users = {users} onRemove = {onRemove} onToggle = {onToggle}/>
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}


export default App;
