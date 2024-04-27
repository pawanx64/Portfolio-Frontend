import './App.css';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Particle } from './Components/Particle';
import { Contact } from './Components/Contact';
import { Routes,Route } from 'react-router-dom';
import { Project } from './Components/Project';
import { Admin } from './Components/Admin';


function App() {
  return (
    
    <div>

      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Project" element={<Project/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="*" element={<Home/>}/>
      </Routes>
      <Particle/>
      
      
    </div>
    
  );
}

export default App;
