import React,{useEffect,useState,useContext} from 'react'
import {v4 as uuid} from 'uuid'
import { UserContext } from '../context/UserContext'
import TeamSearch from './TeamSearch'
import CardGrid from './CardGrid'
import './styles/Team.css'
import CardList from './CardList'
import { Outlet } from 'react-router-dom'
function Team() {
    const {team,setTeam} = useContext(UserContext)
    const [grid,setGrid] = useState(true)
  return (
    <section className='Team'>  
         <aside className='Team-search'>
          <TeamSearch />
          <p className='Team-grid-icon' onClick={e=>setGrid(!grid)}>
            {grid ? 
            (<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M8 23H2.66667C1.95942 23 1.28115 22.7308 0.781048 22.2515C0.280951 21.7723 0 21.1222 0 20.4445V15.3334C0 14.6556 0.280951 14.0056 0.781048 13.5263C1.28115 13.047 1.95942 12.7778 2.66667 12.7778H8C8.70724 12.7778 9.38552 13.047 9.88562 13.5263C10.3857 14.0056 10.6667 14.6556 10.6667 15.3334V20.4445C10.6667 21.1222 10.3857 21.7723 9.88562 22.2515C9.38552 22.7308 8.70724 23 8 23ZM2.66667 15.3334V20.4445H8V15.3334H2.66667Z" fill="black"/>
               <path d="M21.3335 23H16.0001C15.2929 23 14.6146 22.7308 14.1145 22.2515C13.6144 21.7723 13.3335 21.1222 13.3335 20.4445V15.3334C13.3335 14.6556 13.6144 14.0056 14.1145 13.5263C14.6146 13.047 15.2929 12.7778 16.0001 12.7778H21.3335C22.0407 12.7778 22.719 13.047 23.2191 13.5263C23.7192 14.0056 24.0001 14.6556 24.0001 15.3334V20.4445C24.0001 21.1222 23.7192 21.7723 23.2191 22.2515C22.719 22.7308 22.0407 23 21.3335 23ZM16.0001 15.3334V20.4445H21.3335V15.3334H16.0001Z" fill="black"/>
               <path d="M8 10.2222H2.66667C1.95942 10.2222 1.28115 9.95298 0.781048 9.47372C0.280951 8.99446 0 8.34444 0 7.66667V2.55556C0 1.87778 0.280951 1.22776 0.781048 0.748505C1.28115 0.269245 1.95942 0 2.66667 0H8C8.70724 0 9.38552 0.269245 9.88562 0.748505C10.3857 1.22776 10.6667 1.87778 10.6667 2.55556V7.66667C10.6667 8.34444 10.3857 8.99446 9.88562 9.47372C9.38552 9.95298 8.70724 10.2222 8 10.2222ZM2.66667 2.55556V7.66667H8V2.55556H2.66667Z" fill="black"/>
               <path d="M21.3335 10.2222H16.0001C15.2929 10.2222 14.6146 9.95298 14.1145 9.47372C13.6144 8.99446 13.3335 8.34444 13.3335 7.66667V2.55556C13.3335 1.87778 13.6144 1.22776 14.1145 0.748505C14.6146 0.269245 15.2929 0 16.0001 0H21.3335C22.0407 0 22.719 0.269245 23.2191 0.748505C23.7192 1.22776 24.0001 1.87778 24.0001 2.55556V7.66667C24.0001 8.34444 23.7192 8.99446 23.2191 9.47372C22.719 9.95298 22.0407 10.2222 21.3335 10.2222ZM16.0001 2.55556V7.66667H21.3335V2.55556H16.0001Z" fill="black"/>
            </svg>) : 
            (<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 19.8H2C1.44772 19.8 1 19.3523 1 18.8C1 18.2477 1.44772 17.8 2 17.8H20C20.5523 17.8 21 18.2477 21 18.8C21 19.3523 20.5523 19.8 20 19.8Z" fill="black" stroke="black" stroke-linecap="round"/>
                <path d="M20 11.4H2C1.44772 11.4 1 10.9523 1 10.4C1 9.84774 1.44772 9.40002 2 9.40002H20C20.5523 9.40002 21 9.84774 21 10.4C21 10.9523 20.5523 11.4 20 11.4Z" fill="black" stroke="black" stroke-linecap="round"/>
                <path d="M20 3H2C1.44772 3 1 2.55228 1 2C1 1.44772 1.44772 1 2 1L20 1C20.5523 1 21 1.44772 21 2C21 2.55228 20.5523 3 20 3Z" fill="black" stroke="black" stroke-linecap="round"/>
             </svg>
             )}
           </p>
         </aside>
         <Outlet />
         {grid ?
             <div className='Team-grid'>
             {team.map(teammate => (
                 <CardGrid {...teammate} key={uuid()}/> 
             ))}
           </div> :
           <div>
                {team.map(teammate => (
                  <CardList {...teammate} key={uuid()}/>
             ))}
           </div>} 
    </section>
  )
}

export default Team