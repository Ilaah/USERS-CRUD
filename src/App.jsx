import './App.css'
import CardUsers from './components/CardUsers'
import axios from 'axios'
import useApi from './hooks/useApi'
import UserForm from './components/UserForm'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

function App() {

  const { handleSubmit, register, reset } = useForm()

  const { users, getUsers } = useApi()
  const [visibilityForm, setVisibilityForm] = useState(false)
  const [editForm, setEditForm] = useState()

  const showForm = () => {
    const obj = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      birthday: ''
    }
    reset(obj)
    setVisibilityForm(!visibilityForm)
  }

  const deleteUser = id => {

    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
      .finally(() => getUsers())
  }

  const editUserById = (id, editUser) => {
    axios.patch(`https://users-crud1.herokuapp.com/users/${id}/`, editUser)
      .then(res => {
        console.log(res.data)
        getUsers()
        setEditForm()
        setVisibilityForm(false)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <button onClick={showForm} className= 'btn-register'>{visibilityForm ? 'Close': 'Sign Up!'}</button>
      {
        visibilityForm && <UserForm
          getUsers={getUsers}
          editUserById={editUserById}
          editForm={editForm}
          handleSubmit={handleSubmit}
          reset={reset}
          register={register}
        />
      }
      <div className='cards'>
        {
          users?.map(user =>
            <CardUsers
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setEditForm={setEditForm}
              setVisibilityForm={setVisibilityForm}
              reset={reset}
            />
          )
        }
      </div>
    </div>
  )
}

export default App