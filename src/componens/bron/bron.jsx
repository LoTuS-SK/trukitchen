
import React ,{useState} from 'react'
import logo1 from "../../png/bron/logo1.png"
import logo2 from "../../png/bron/logo2.png"
import "./bron.css"

const Bron = () => {

const [name,setname]= useState("")
//const [tel,settel]=useState("")

function setnames(e){
    setname(e.target.value)
}

function submit(){
    
    console.log(name)
}

  return (
    <>
    <div className="bron_wr">
        <div className="img_head">
        <img src={logo2} alt="" />
        </div>
        <div className="wr_content">
            <h2 className='bron_h2'>Бронирование столика</h2>
            <input type="text" name="name" placeholder='Ваше имя' value={name} onChange={setnames}/>
            <input type="tel" name="tel" placeholder="номер телефона" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
            <input type="numder" placeholder="Количетво персон"/>
                <div className="data_wr">
                    <label for="date">Дата</label>
                    <input type="date" name="" id="date" className='data'/>
                </div>
                <div className="wr_button">
                    <div className="button" onClick={submit}>Отправить</div>
                </div>
        </div>
        <div className="img_footer">
        <img src={logo1} alt="" />
        </div>
    </div>
    </>
  )
}

export default Bron