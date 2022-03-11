import React,{useEffect, createContext,useState} from 'react'
import axios from 'axios'

export const UserContext = createContext()
export function UserProvider({children}) {
  const [team,setTeam] = useState(null || [])
  const [search,setSearch] = useState(false)
  useEffect(()=>{
    async function users(url='https://randomuser.me/api/?results=3'){
       try {
         const data = await axios.get(url)
         const res = await data.data.results
         setTeam(res)
       } catch (error) {
        const team = [
            { name : {first : 'N/A',last:''},
              email : '',
              location : {country : 'N/A'},
              picture : {large : ''},
              login : {
                  uuid : 11
              }
            }
         ]
         setTeam(team)
       }
    }
    users()
 },[search])
  return (
    <UserContext.Provider value={{team,setTeam,setSearch,search}}>
        {children}
    </UserContext.Provider>
  )
}
