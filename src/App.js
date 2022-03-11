
import Team from './component/Team';
import { UserProvider } from './context/UserContext';
import { Routes,Route } from 'react-router-dom';
import CardGrid from './component/CardGrid';
import CardList from './component/CardList';
import './App.css';

function App() {
  return (
   <UserProvider>
      <main className="App">
        <section>
             <h1 >Meet the Team</h1>
         </section>
         <Team />
         <Routes>
                 <Route path="/" element={<CardGrid />}/>
                 <Route path="list" element={<CardList />}/>
                 <Route path="*" element={<CardList />}/>
         </Routes>
      </main>
   </UserProvider>
  );
}

export default App;
