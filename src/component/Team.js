import React from 'react'
import TeamSearch from './TeamSearch'
import Card from './Card'
import './styles/Team.css'
function Team() {
  return (
    <section className='Team'>  
         <aside className='Team-search'>
          <TeamSearch />
          <p>View</p>
         </aside>
        <Card />
    </section>
  )
}

export default Team