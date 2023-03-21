
import './App.css';
import Menu from "./componens/menu/Menu";
import {Routes,Route} from 'react-router-dom';
import Salats from "./componens/salats/Salats"

function App() {
  return (
    <>
      
  
    <Routes>
    <Route index element = {<Menu/>} />
      
      <Route path={"menu"} element={<Menu/>} />
      <Route path="/salat" element={<Salats/>} />
     
    </Routes>
                 
      
           
      
    
    </>    
  );
}

export default App;
