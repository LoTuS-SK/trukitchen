
import './App.css';
import Menu from "./componens/menu/Menu";
import {Routes,Route} from 'react-router-dom';
import Chek from "./componens/chek/Chek"
import { useState } from 'react';
import chekimg from "./img/free.png"



function App() {
  
  const[disqr,set_disqr]=useState(true)
  const[dis_ch,set_disch]=useState(false)
  const[menu_dis_app,set_menu_dis_app]=useState(true)

  function setqr(bol){
    set_disqr(bol)
  }
  function yes(){
    set_disqr(true)
  }

  function chsetdis(){
    set_disch(false)
  }

  function chektrueDis(){
    set_disch(true)
    set_menu_dis_app(false)
  }


  
  return (
    <>
      
    
  
    <Routes>
    <Route index element = {<Menu disqr={disqr} 
    setqr={setqr} 
    yes={yes} 
    chdis={dis_ch} 
    chsetdis={chsetdis}
    menu_dis_app={menu_dis_app}
    />} />
      
      <Route path={"menu"} element={<Menu/>} />
      <Route path="chek" element={<Chek/>} />
     
    </Routes>
                 
      
           
      
    
    </>    
  );
}

export default App;
