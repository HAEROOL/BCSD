import React, { useEffect } from 'react'
function Users({user, onRemove, onToggle}){
    useEffect(()=>{
        console.log(user)
        return ()=>{
            console.log(user)
        }
    },[user])
    return (
        <div>
            <b style={{
                color: user.online ? 'green' : 'black',
                cursor:'pointer'
            }}
            onClick={()=>onToggle(user.id)}>{user.username}</b><span>({user.email})</span>
            <button onClick={()=>onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList({users, onRemove, onToggle}){
    return(
        <div>
            {
                users.map(
                    user => (<Users
                                user={user}
                                key={user.id}
                                onRemove={onRemove}
                                onToggle={onToggle}
                            />)
                )
            }
        </div>
    )
}
export default UserList