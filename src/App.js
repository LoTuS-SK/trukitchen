
import './App.css';
import Menu from "./componens/menu/Menu";
import {Routes,Route} from 'react-router-dom';
import Chek from "./componens/chek/Chek"
import { useState } from 'react';



function App() {
  
  const[disqr,set_disqr]=useState(true)

  function setqr(bol){
    set_disqr(bol)
  }
  function yes(){
    set_disqr(true)
  }
  
  return (
    <>
      
      
  
    <Routes>
    <Route index element = {<Menu disqr={disqr} setqr={setqr} yes={yes}/>} />
      
      <Route path={"menu"} element={<Menu/>} />
      <Route path="/chek" element={<Chek/>} />
     
    </Routes>
                 
      
           
      
    
    </>    
  );
}

export default App;
