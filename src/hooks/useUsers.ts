import Reac, { useEffect,useRef,useState } from 'react'
import type { User } from '../interfaces/reqres.response'
import { loadUsersAction } from '../actions/load-users.action'

export const useUsers = () => {


    const [users, setUsers] = useState<User[]>([])
    const currentPage = useRef(1)


    useEffect(() => {
        loadUsersAction(1)
            .then(setUsers)
    }, [])

    const nextPage  = async () => {
      currentPage.current++
      const users = await loadUsersAction(currentPage.current)
      
      if(users.length > 0){
        setUsers(users)
      } else {
        currentPage.current--
      }
    }

    const previousPage  = async () => {
      
      if(currentPage.current < 1) return;

      currentPage.current--
      const users = await loadUsersAction(currentPage.current)
      setUsers(users)
        
    }

    

  return {
    users,
    nextPage,
    previousPage
  }
}
