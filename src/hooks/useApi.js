import { useState, useEffect } from "react"
import axios from 'axios'

const useApi = () => {

    const [users, setUsers] = useState([])

    useEffect( () => {
        axios.get(`https://users-crud1.herokuapp.com/users/`)
          .then(res => setUsers(res.data))
          .catch(err => console.log(err))
      }, [])
  
    const getUsers = () => {
          axios.get(`https://users-crud1.herokuapp.com/users/`)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
   }
  
    return {users, getUsers}
}

export default useApi