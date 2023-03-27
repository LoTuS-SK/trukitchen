import React, { useState } from 'react'
import "./bar.css"
import W_VINE from './w_vine'
import R_VINE from "./r_vine"


const Vine = ({display}) => {
    const [vine_dis,set_vine_dis]= useState(true)
    const [w_vine_dis,w_set_vine_dis] = useState(false)
    const [r_vine_dis,r_set_vine_dis] = useState(false)
    
    
    function click_vine(e){
        const target = e.target.textContent
        
        switch(target) {
            case "Белое":
                set_vine_dis(false)
                w_set_vine_dis(true)
                break;
                case "Красное":
                set_vine_dis(false)
                r_set_vine_dis(true)
                break;
        
            default:
                break;
        }
    }
  


function back(){
    w_set_vine_dis(false)
    set_vine_dis(true)
    r_set_vine_dis(false)
}

    return (
    <div className={display?'vine_wr':"vine_wr none"}>
        <div className={vine_dis?"menu_wr":"menu_wr none"}> 
            <div className='menu-items'onClick={click_vine}>Красное</div>
            <div className='menu-items'onClick={click_vine}>Белое</div>
        </div> 
        <W_VINE display ={w_vine_dis} back={back}/>
        <R_VINE display ={r_vine_dis} back={back}/>
    </div>
  )
    }

export default Vine