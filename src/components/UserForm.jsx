import React, { useEffect } from 'react'
import axios from 'axios'

const UserForm = ({ getUsers, editUserById, editForm, handleSubmit, register, reset }) => {

  const createUser = newUser => {
    axios.post('https://users-crud1.herokuapp.com/users/', newUser)
      .then(res => {
        console.log(res.data)
        getUsers()
      })
      .catch(err => console.log(err))
  }

  const defaultValue = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: ''
  }


  const submit = data => {
    if (editForm !== undefined) {
      editUserById(editForm.id, data)
      reset(defaultValue)
    } else {
      createUser(data)
    }
    reset(defaultValue)
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='form animate__animated animate__backInUp'>
      <div className='form__info form__fullname'>
        <label htmlFor="first_name" className='form__label'>First Name</label>
        <input type="text" id='first_name' {...register('first_name')} className='form__input' />

        <label htmlFor="last_name" className='form__label'>Last Name</label>
        <input type="text" id='last_name' {...register('last_name')} className='form__input' />
      </div>

      <div className='form__info'>
        <label htmlFor="email" className='form__label'>Email</label>
        <input type="text" id='email' {...register('email')} className='form__input' />
      </div>

      <div className='form__info'>
        <label htmlFor="password" className='form__label'>Password</label>
        <input type="password" id='password' {...register('password')} className='form__input' />
      </div>

      <div className='form__info form__info-birthday'>
        <label htmlFor="birthday" className='form__label'>Birthday</label>
        <input type="date" id='birthday' {...register('birthday')} className='form__input' />
      </div>
      <button className='form__submit'>SUBMIT</button>
    </form>
  )
}

export default UserForm