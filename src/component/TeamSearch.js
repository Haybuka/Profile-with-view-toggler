import React,{useState,useContext} from 'react'
import { UserContext } from '../context/UserContext'
import '../component/styles/TeamSearch.css'
function TeamSearch() {
  const {team,setTeam,search,setSearch} = useContext(UserContext)
  const [user,setUser] = useState('');
 function handleChange(e){
    setUser(e.target.value)
 }
 function handleSubmit(e){
    e.preventDefault()
   let userName = user.slice(0,1).toUpperCase() + user.slice(1).toLowerCase()
    let newTeam = team.find(teammate => teammate.name.first === userName)
    if(!newTeam){
      newTeam = { name : {first : userName,last:''},
            email : '',
            location : {country : 'N/A'},
            picture : {large : ''},
           login : {
                 uuid : 11
                }
      }}
    setTeam([newTeam])
    setTimeout(() => {
      setSearch(!search)
    }, 2000);
 }
 function handleSort(){
  const newTeam = team.sort((a,b)=> a.name.first > b.name.first)
  const userTeam = newTeam.map(team => team.nat ? {...team, nat : ""} : team)
  setTeam(userTeam)
 }
  return (
    <form onSubmit={handleSubmit} className="TeamSearch">
        <p className='TeamSearch-order' onClick={handleSort}>
             <svg width="15" height="20" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.394142 12.0708C-0.131381 11.5745 -0.131381 10.7757 0.394142 10.2794C0.656903 10.0312 0.997672 9.90714 1.34255 9.90714C1.68742 9.90714 2.02819 10.0312 2.29095 10.2794L6.94675 14.6765V1.26796C6.94675 0.57 7.54618 0 8.2893 0C9.02832 0 9.63185 0.566122 9.63185 1.26796V14.6765L14.2794 10.2794C14.805 9.78306 15.6507 9.78306 16.1762 10.2794C16.7018 10.7757 16.7018 11.5745 16.1762 12.0708L9.2336 18.6278C8.98315 18.8643 8.64239 19 8.28519 19C7.928 19 7.58723 18.8682 7.33679 18.6278L0.394142 12.0708Z" fill="black"/>
            </svg>
           <svg width="15" height="20" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M16.7005 6.92918C17.226 7.42551 17.226 8.22429 16.7005 8.72061C16.4378 8.96877 16.097 9.09286 15.7521 9.09286C15.4072 9.09286 15.0665 8.96877 14.8037 8.72061L10.1479 4.32347L10.1479 17.732C10.1479 18.43 9.54849 19 8.80537 19C8.06635 19 7.46282 18.4339 7.46282 17.732L7.46282 4.32347L2.81523 8.72061C2.28971 9.21694 1.44394 9.21694 0.918419 8.72061C0.392897 8.22429 0.392897 7.42551 0.918419 6.92918L7.86107 0.372244C8.11151 0.135714 8.45228 0 8.80947 0C9.16666 0 9.50743 0.131836 9.75788 0.372244L16.7005 6.92918Z" fill="black"/>
           </svg>
        </p>
        <label>
            <input value={user} onChange={handleChange} type='text' placeholder=''/>
            <span>
             <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <mask id="path-1-inside-1_36_27" fill="white">
                   <path d="M19.049 16.7116L13.6911 11.5434C14.7474 10.3224 15.3826 8.762 15.3826 7.05773C15.3826 3.16963 12.0723 0.00823975 8.00028 0.00823975C3.92831 0.00823975 0.61026 3.17332 0.61026 7.06142C0.61026 10.9495 3.92065 14.1109 7.99263 14.1109C9.72245 14.1109 11.3145 13.5391 12.5774 12.5837L17.9544 17.7666C18.2682 18.0691 18.7351 18.0691 19.049 17.7666C19.3628 17.4641 19.3628 17.0141 19.049 16.7116ZM2.17935 7.06142C2.17935 4.00701 4.78939 1.52438 7.99263 1.52438C11.1959 1.52438 13.8059 4.00701 13.8059 7.06142C13.8059 10.1158 11.1959 12.5985 7.99263 12.5985C4.78939 12.5985 2.17935 10.1121 2.17935 7.06142Z"/>
                   </mask>
                   <path d="M19.049 16.7116L13.6911 11.5434C14.7474 10.3224 15.3826 8.762 15.3826 7.05773C15.3826 3.16963 12.0723 0.00823975 8.00028 0.00823975C3.92831 0.00823975 0.61026 3.17332 0.61026 7.06142C0.61026 10.9495 3.92065 14.1109 7.99263 14.1109C9.72245 14.1109 11.3145 13.5391 12.5774 12.5837L17.9544 17.7666C18.2682 18.0691 18.7351 18.0691 19.049 17.7666C19.3628 17.4641 19.3628 17.0141 19.049 16.7116ZM2.17935 7.06142C2.17935 4.00701 4.78939 1.52438 7.99263 1.52438C11.1959 1.52438 13.8059 4.00701 13.8059 7.06142C13.8059 10.1158 11.1959 12.5985 7.99263 12.5985C4.78939 12.5985 2.17935 10.1121 2.17935 7.06142Z" fill="black"/>
                   <path d="M19.049 16.7116L17.6605 18.1511L17.661 18.1516L19.049 16.7116ZM13.6911 11.5434L12.1785 10.235L10.9391 11.6677L12.3026 12.9829L13.6911 11.5434ZM12.5774 12.5837L13.9654 11.1437L12.7344 9.95713L11.3708 10.9887L12.5774 12.5837ZM20.4375 15.2721L15.0796 10.104L12.3026 12.9829L17.6605 18.1511L20.4375 15.2721ZM15.2037 12.8519C16.554 11.291 17.3827 9.27282 17.3827 7.05773H13.3826C13.3826 8.25119 12.9408 9.35381 12.1785 10.235L15.2037 12.8519ZM17.3827 7.05773C17.3827 1.97915 13.0889 -1.99176 8.00028 -1.99176V2.00824C11.0556 2.00824 13.3826 4.36011 13.3826 7.05773H17.3827ZM8.00028 -1.99176C2.91302 -1.99176 -1.38974 1.98153 -1.38974 7.06142H2.61026C2.61026 4.3651 4.9436 2.00824 8.00028 2.00824V-1.99176ZM-1.38974 7.06142C-1.38974 12.14 2.904 16.1109 7.99263 16.1109V12.1109C4.93731 12.1109 2.61026 9.75904 2.61026 7.06142H-1.38974ZM7.99263 16.1109C10.1685 16.1109 12.1822 15.3905 13.7841 14.1787L11.3708 10.9887C10.4468 11.6877 9.2764 12.1109 7.99263 12.1109V16.1109ZM11.1894 14.0237L16.5664 19.2066L19.3424 16.3267L13.9654 11.1437L11.1894 14.0237ZM16.5664 19.2066C17.6549 20.2558 19.3484 20.2558 20.4369 19.2066L17.661 16.3267C17.8698 16.1254 18.1695 15.9935 18.5017 15.9935C18.8339 15.9935 19.1336 16.1254 19.3424 16.3267L16.5664 19.2066ZM20.4369 19.2066C21.5668 18.1175 21.5668 16.3607 20.4369 15.2716L17.661 18.1516C17.4508 17.949 17.2843 17.6266 17.2843 17.2391C17.2843 16.8516 17.4508 16.5292 17.661 16.3267L20.4369 19.2066ZM4.17935 7.06142C4.17935 5.20299 5.80028 3.52438 7.99263 3.52438V-0.475622C3.77851 -0.475622 0.179348 2.81103 0.179348 7.06142H4.17935ZM7.99263 3.52438C10.185 3.52438 11.8059 5.20299 11.8059 7.06142H15.8059C15.8059 2.81103 12.2067 -0.475622 7.99263 -0.475622V3.52438ZM11.8059 7.06142C11.8059 8.91985 10.185 10.5985 7.99263 10.5985V14.5985C12.2067 14.5985 15.8059 11.3118 15.8059 7.06142H11.8059ZM7.99263 10.5985C5.80116 10.5985 4.17935 8.917 4.17935 7.06142H0.179348C0.179348 11.3073 3.77762 14.5985 7.99263 14.5985V10.5985Z" fill="black" mask="url(#path-1-inside-1_36_27)"/>
             </svg>
           </span>
        </label>
    </form>
  )
}

export default TeamSearch