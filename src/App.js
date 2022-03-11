
import Team from './component/Team';
import { UserProvider } from './context/UserContext';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import CardGrid from './component/CardGrid';

function App() {
  return (
   <UserProvider>
      <main className="App">
        <aside>
             <h1>Meet the Team</h1>
         </aside>
         <Team />
         <Routes>
            <Route path="/grid" element={<CardGrid />}/>
         </Routes>
      </main>
   </UserProvider>
  );
}

export default App;
