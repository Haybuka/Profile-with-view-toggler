import React,{useContext} from 'react'
import { UserContext } from '../context/UserContext'
import './styles/CardList.css'
function CardList(props) {
  const {team} = useContext(UserContext)
  return (
   <section className='List-container'>
        {
             team.map(teammate => (
                <div className='Card-List' key={teammate.login.uuid}>
                <aside className='Card-main'>
                    <span className='Card-div'>
                      <img src={teammate.picture.large} alt={teammate.name.first} className="CardList-img"/>
                    </span>
                    <div className='CardGrid-body'>
                    <div>
                          <h3>{teammate.name.first} {teammate.name.last}</h3>
                          <p> {teammate.location.country}  </p>
                     </div>
                     <ul>
                     <li>
                       <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M20.3059 0.752324H1.69409C0.761181 0.752324 0 1.51351 0 2.44642V15.5536C0 16.4865 0.761181 17.2477 1.69409 17.2477H20.3059C21.2388 17.2477 22 16.4865 22 15.5536V2.44642C22 1.51351 21.2388 0.752324 20.3059 0.752324ZM20.0599 2.00549L11.116 9.65443L2.17215 2.00549H20.0599ZM20.7468 15.5536C20.7468 15.7949 20.5473 15.9945 20.3059 15.9945H1.69409C1.45274 15.9945 1.25316 15.7949 1.25316 15.5536V2.86878L10.7076 10.954C10.7122 10.9587 10.7215 10.9633 10.7262 10.9679C10.7308 10.9726 10.7401 10.9772 10.7447 10.9819C10.7586 10.9911 10.7679 11.0004 10.7819 11.0051C10.7865 11.0097 10.7911 11.0097 10.7958 11.0143C10.8143 11.0236 10.8329 11.0329 10.8515 11.0422C10.8561 11.0422 10.8608 11.0468 10.8654 11.0468C10.8793 11.0515 10.8932 11.0608 10.9118 11.0654C10.9165 11.0654 10.9257 11.07 10.9304 11.07C10.9443 11.0747 10.9582 11.0793 10.9722 11.0793C10.9768 11.0793 10.9861 11.084 10.9907 11.084C11.0046 11.0886 11.0232 11.0886 11.0371 11.0933C11.0418 11.0933 11.0464 11.0933 11.0511 11.0933C11.0696 11.0933 11.0928 11.0979 11.1114 11.0979C11.13 11.0979 11.1532 11.0979 11.1717 11.0933C11.1764 11.0933 11.181 11.0933 11.1857 11.0933C11.1996 11.0933 11.2181 11.0886 11.2321 11.084C11.2367 11.084 11.246 11.0793 11.2506 11.0793C11.2646 11.0747 11.2785 11.07 11.2924 11.07C11.297 11.07 11.3063 11.0654 11.311 11.0654C11.3249 11.0608 11.3388 11.0561 11.3574 11.0468C11.362 11.0468 11.3667 11.0422 11.3713 11.0422C11.3899 11.0329 11.4084 11.0236 11.427 11.0143C11.4316 11.0097 11.4363 11.0097 11.4409 11.0051C11.4549 10.9958 11.4641 10.9911 11.4781 10.9819C11.4827 10.9772 11.492 10.9726 11.4966 10.9679C11.5013 10.9633 11.5105 10.9587 11.5152 10.954L20.7468 3.06836V15.5536Z" fill="black"/>
                       </svg>
                     </li>
                     <li>
                       <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M15.016 11.7698C14.627 11.3648 14.1578 11.1483 13.6606 11.1483C13.1673 11.1483 12.6942 11.3608 12.2891 11.7658L11.022 13.029C10.9177 12.9729 10.8134 12.9207 10.7132 12.8686C10.5688 12.7964 10.4325 12.7282 10.3162 12.6561C9.1292 11.9022 8.05049 10.9197 7.01589 9.6485C6.51463 9.01491 6.17778 8.48157 5.93316 7.94021C6.26199 7.63945 6.56676 7.32667 6.8635 7.02591C6.97579 6.91363 7.08807 6.79734 7.20035 6.68505C8.04247 5.84294 8.04247 4.7522 7.20035 3.91008L6.1056 2.81533C5.98128 2.69101 5.85296 2.56269 5.73266 2.43437C5.49205 2.18574 5.23942 1.9291 4.97876 1.68849C4.58979 1.30353 4.12462 1.09901 3.63539 1.09901C3.14616 1.09901 2.67297 1.30353 2.27196 1.68849C2.26795 1.69251 2.26795 1.69251 2.26394 1.69652L0.900513 3.07197C0.387222 3.58526 0.0944866 4.21083 0.0303254 4.93666C-0.0659166 6.1076 0.27895 7.19834 0.543616 7.91214C1.19325 9.66454 2.16369 11.2886 3.61133 13.029C5.36774 15.1263 7.48105 16.7824 9.89512 17.9494C10.8174 18.3865 12.0485 18.9038 13.424 18.992C13.5082 18.996 13.5964 19 13.6766 19C14.603 19 15.3809 18.6672 15.9904 18.0055C15.9945 17.9975 16.0025 17.9935 16.0065 17.9855C16.215 17.7328 16.4556 17.5042 16.7083 17.2596C16.8807 17.0952 17.0571 16.9228 17.2296 16.7423C17.6266 16.3293 17.8351 15.8481 17.8351 15.3548C17.8351 14.8576 17.6225 14.3804 17.2175 13.9794L15.016 11.7698ZM16.4516 15.9924C16.4476 15.9924 16.4476 15.9965 16.4516 15.9924C16.2952 16.1609 16.1348 16.3133 15.9624 16.4817C15.7017 16.7303 15.4371 16.991 15.1884 17.2837C14.7834 17.7168 14.3062 17.9213 13.6806 17.9213C13.6205 17.9213 13.5563 17.9213 13.4962 17.9173C12.3052 17.8411 11.1984 17.3759 10.3683 16.9789C8.09861 15.8802 6.1056 14.3202 4.44943 12.3433C3.082 10.6951 2.1677 9.1713 1.56218 7.53519C1.18924 6.53668 1.0529 5.75873 1.11305 5.02488C1.15315 4.5557 1.3336 4.16672 1.66644 3.83389L3.03388 2.46645C3.23037 2.28199 3.43889 2.18173 3.64341 2.18173C3.89604 2.18173 4.10056 2.33412 4.22888 2.46244C4.23289 2.46645 4.2369 2.47046 4.24091 2.47447C4.48552 2.70305 4.71811 2.93964 4.96272 3.19227C5.08704 3.3206 5.21536 3.44892 5.34368 3.58125L6.43843 4.676C6.8635 5.10107 6.8635 5.49406 6.43843 5.91913C6.32214 6.03542 6.20986 6.15171 6.09357 6.26399C5.75672 6.60886 5.43591 6.92967 5.08704 7.24245C5.07902 7.25047 5.071 7.25448 5.06699 7.2625C4.72212 7.60737 4.78628 7.94422 4.85846 8.17279C4.86247 8.18482 4.86648 8.19685 4.87049 8.20888C5.15521 8.89862 5.55622 9.54825 6.16575 10.3222L6.16976 10.3262C7.27654 11.6896 8.44347 12.7523 9.73071 13.5663C9.89512 13.6706 10.0635 13.7548 10.224 13.835C10.3683 13.9072 10.5047 13.9754 10.6209 14.0476C10.637 14.0556 10.653 14.0676 10.6691 14.0756C10.8054 14.1438 10.9337 14.1759 11.0661 14.1759C11.3989 14.1759 11.6074 13.9674 11.6756 13.8992L13.047 12.5277C13.1834 12.3914 13.3999 12.227 13.6526 12.227C13.9012 12.227 14.1057 12.3834 14.23 12.5197C14.234 12.5237 14.234 12.5237 14.238 12.5277L16.4476 14.7373C16.8606 15.1463 16.8606 15.5674 16.4516 15.9924Z" fill="black"/>
                         <path d="M10.2681 4.51962C11.3187 4.69606 12.2731 5.19331 13.035 5.95522C13.7969 6.71714 14.2902 7.67154 14.4706 8.72218C14.5147 8.98684 14.7433 9.17131 15.004 9.17131C15.036 9.17131 15.0641 9.1673 15.0962 9.16329C15.3929 9.11517 15.5894 8.83446 15.5413 8.53772C15.3248 7.26652 14.7233 6.10761 13.805 5.1893C12.8866 4.27099 11.7277 3.66948 10.4565 3.45293C10.1598 3.40481 9.88309 3.60131 9.83096 3.89404C9.77883 4.18678 9.97131 4.47149 10.2681 4.51962Z" fill="black"/>
                         <path d="M18.978 8.38131C18.6211 6.28805 17.6346 4.38326 16.1188 2.86745C14.603 1.35164 12.6982 0.365164 10.6049 0.00826669C10.3122 -0.0438644 10.0355 0.15664 9.98335 0.449376C9.93523 0.746121 10.1317 1.02282 10.4285 1.07495C12.2972 1.39174 14.0014 2.27797 15.3569 3.62937C16.7123 4.98478 17.5945 6.68906 17.9113 8.55776C17.9554 8.82242 18.184 9.00689 18.4446 9.00689C18.4767 9.00689 18.5048 9.00288 18.5369 8.99887C18.8296 8.95476 19.0301 8.67405 18.978 8.38131Z" fill="black"/>
                       </svg>
            
                     </li>
                     </ul>
                    </div>
                </aside>
             </div>
           ))
        }
   </section>
  )
}

export default CardList