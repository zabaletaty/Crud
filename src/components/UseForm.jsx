import React from 'react'
import { useForm } from 'react-hook-form'

const UseForm = ({handleSubmit, reset, register, createUsers, objectGlobal,updateUserById, sum}) => {

    const defaultValuesForm = {
        birthday: "",
        email: "",
        first_name: "",
        last_name: "",
        password: ""
  
    }


    const submit = data => {
    if(objectGlobal !== undefined){
        updateUserById(objectGlobal.id, data)
        reset(defaultValuesForm)
    } else {
        createUsers(data)
    }
    reset(defaultValuesForm)
  }

  return (
    <div className='formStyles'>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="first_name"><i className="fa-solid fa-user"></i> </label>
                <input type="text" id='first_name' placeholder='First name ' {...register("first_name")}/>
                <label htmlFor="last_name"></label>
                <input type="text" id='last_name' placeholder='First last' {...register("last_name")}/>
            </div>
            <div>
                <label htmlFor="email"><i className="fa-solid fa-envelope"></i> </label>
                <input type="email" id='email' placeholder='Email' {...register("email")}/>
            </div>
            <div>
                <label htmlFor="password"><i className="fa-solid fa-lock"></i> </label>
                <input type="password" id='password' placeholder='Password' {...register("password")}/>
            </div>
            <div>
                <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i> </label>
                <input type="date" id='birthday' placeholder='Birthday' {...register("birthday")}/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UseForm