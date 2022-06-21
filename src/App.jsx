import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UseForm from './components/UseForm'
import UsersList from './components/UsersList'
import { useForm } from "react-hook-form";

function App() {

  const [users, setUsers] = useState()
  const {handleSubmit, register,reset} = useForm()
  const [showForm, setShowForm] = useState(false)
  const [objectGlobal, setObjectglobal] = useState()
  

  const show = () => {
    setShowForm(!showForm)
  }

  const getUsers = () =>{
    axios.get("https://users-crud1.herokuapp.com/users/")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err))
  }

  const createUsers = newUser => {
    axios.post(`https://users-crud1.herokuapp.com/users/`, newUser)
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
      .finally(getUsers())
  }

  const deleteUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(res => console.log(res.data))
      .catch(err =>console.error(err+"io"))
      .finally(getUsers())
  }

  const updateUserById = (id,updateUser) => {
    axios.patch(`https://users-crud1.herokuapp.com/users/${id}/`, updateUser)
      .then(res => {
        console.log(res.data)
        getUsers()
        setObjectUpdate()
        setShowForm(false)
      })
      .catch(err =>console.error(err+"io"))
  }

  useEffect(() => {
    getUsers()
  }, [])

  
  

  return (
    <>
    <button onClick={show}>Create user</button>
    <div className="App">
      {
        showForm && 
        <UseForm
        reset={reset}
        handleSubmit={handleSubmit}
        register={register}
        createUsers={createUsers}
        updateUserById={updateUserById}
        objectGlobal={objectGlobal}
        
        />
      }
      {
        users?.map(user =>(
          <UsersList
            user={user}    
            key={user.id} 
            deleteUser={deleteUser}
            setShowForm={setShowForm}     
            reset={reset}
            setObjectglobal={setObjectglobal}
          />
        ))
      }
    </div>
    </>
  )
}

export default App
