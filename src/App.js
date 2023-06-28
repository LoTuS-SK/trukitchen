
import './App.css';
import Menu from "./componens/menu/Menu";
import {Routes,Route} from 'react-router-dom';
import Chek from "./componens/chek/Chek"
import Qr from "./componens/qrcode/qrcode.jsx"
import Snaks from './componens/menu/snaks/snaks';
import Salat from './componens/menu/salats/salat'; 
import Hot from './componens/menu/hot/hot';
import Soup from "./componens/menu/soup/suop"
import Onfire from './componens/menu/onfire/onfire';
import Aqua from './componens/menu/aqua/aqua';
import Bake from './componens/menu/bake/bake';
import Garnish from './componens/menu/garnish/garnish';
import Sweets from './componens/menu/sweets/sweets'; 
import  Bar  from './componens/menu/bar/bar_m';
import Bread from "./componens/menu/bread"
import Qrcode from "./componens/qrcode/qrcode"
import Bron from "../src/componens/bron/bron"


function App() {


  
  return (
    <>
      
    
  
    <Routes>
    <Route index element = {<Menu/>} />
      <Route path={"qrcode"} element={<Qr/>} />
      <Route path={"menu"} element={<Menu/>} />
      <Route path="chek" element={<Chek/>} />
      <Route path={"/snaks"} element={<Snaks/>} />
      <Route path={"/salat"} element={<Salat/>} />
      <Route path={"hot"} element={<Hot/>} />
      <Route path={"auqa"} element={<Aqua/>} />
      <Route path={"soup"} element={<Soup/>} />
      <Route path={"onfire"} element={<Onfire/>}/>
      <Route path="bake" element={<Bake/>}/>
      <Route path="garnish" element={<Garnish/>} />
      <Route path="sweets" element={<Sweets/>} />
      <Route path="bar" element={<Bar/>} />
      <Route path="bread" element={<Bread/>} />
      <Route path="qr" element={<Qrcode/>} />
      <Route path="bron" element={<Bron/>} />
     
    </Routes>
                 
      
           
      
    
    </>    
  );
}

export default App;
