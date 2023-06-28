import React, { useState } from 'react'
import "./bar.css"
import vine from "../../../png/wine.png"
import W_VINE from './w_vine'
import R_VINE from "./r_vine"
import { useSelector } from 'react-redux'
//import strelka from "../../../png/strelka.png"


const Vine = ({display,back,add}) => {
    const ru = useSelector(el=>el.one)
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
                case "White":
                set_vine_dis(false)
                w_set_vine_dis(true)
                break;
                case "Красное":
                set_vine_dis(false)
                r_set_vine_dis(true)
                break;
                case "Red":
                    set_vine_dis(false)
                    r_set_vine_dis(true)
                    break;
        
            default:
                break;
        }
    }
  


function back1(){
    w_set_vine_dis(false)
    set_vine_dis(true)
    r_set_vine_dis(false)
}

    return (
    <div className={display?'vine_wr':"vine_wr none"}>
        <div className='btn-back' onClick={back}>←</div>
        <div className={vine_dis?"menu_wr":"menu_wr none"}> 
            <div className='menu-items mg'onClick={click_vine}>{ru==="ru"?"Красное":"Red"}</div>
            <div className='menu-items mg'onClick={click_vine}>{ru==="ru"?"Белое":"White"}</div>
                <div className='wrap_img_vine'>
                    <img src={vine} alt="" />
                </div>
            {/* <div className='btn-back' onClick={back}>←</div> */}
            {/* <div className='strelka' onClick={back}><img src={strelka} alt="" /></div> */}
        </div> 
        <W_VINE display ={w_vine_dis} back={back1} add={add}/>
        <R_VINE display ={r_vine_dis} back={back1} add={add}/>
       
    </div>
  )
    }

export default Vine