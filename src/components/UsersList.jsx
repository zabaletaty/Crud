import React from 'react'

const UsersList = ({user, deleteUser, setShowForm, reset, setObjectglobal}) => {

    const editUser = () => {
        setShowForm(true)

        console.log(user);

        const obj = {
            birthday: user.birthday,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            password: user.password
        }

        
        reset(obj)
        setObjectglobal(user)
    }

    const newset = () =>{
        console.log(user);
    }
    
    
  return (
    
    <div className='users'>
        <div className='card'>
            <article className='articulo'>   
                <h1>{user.first_name} {user.last_name}</h1>
                <p>{user.email}</p>
                <p>{user.birthday}</p>                       
            </article>
        </div>
        <div className='Button'>
            <button onClick={() => deleteUser(user.id)}><i className="fa-solid fa-trash"></i></button>
            <button onClick={() => {editUser(), newset()}}><i className="fa-solid fa-pencil"></i></button>
        </div>
    </div>
    
    
  )
}

export default UsersList