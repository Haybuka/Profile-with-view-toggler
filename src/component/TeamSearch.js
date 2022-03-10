import React,{useState} from 'react'
import '../component/styles/TeamSearch.css'
function TeamSearch() {
 const [user,setUser] = useState('');
 function handleChange(e){
    setUser(e.target.value)
 }
 function handleSubmit(e){
    e.preventDefault()
 }
  return (
    <form onSubmit={handleSubmit} className="TeamSearch">
        <p>||</p>
        <label>
            <input value={user} onChange={handleChange} type='text' placeholder=''/>
             <span></span>
        </label>
    </form>
  )
}

export default TeamSearch