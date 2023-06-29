
import React ,{useState} from 'react'
import logo1 from "../../png/bron/logo1.png"
import logo2 from "../../png/bron/logo2.png"
import logo3 from "../../img/Asset-1.png"
import "./bron.css"

const Bron = () => {

    //6146285866:AAEzIDl9PSjxpBWjtS82qioTpC_cgmVG5q4
    const bot = {
        token:"6146285866:AAEzIDl9PSjxpBWjtS82qioTpC_cgmVG5q4",
        chatID:"-996929511",
        name:"t.me/chikentruebot."
      }



const [name,setname]= useState("")
const [tel,settel]=useState("")
const [homo,sethomo]= useState("")
const [data,setdate]=useState("")
const [time,settime]=useState("")
const [time2,settime2] = useState()
const [wrdis,setwrdis] = useState(true)


function setnames(e){
    setname(e.target.value)
}

function sethomes(e){
    sethomo(e.target.value)
}

function setdates(e){
    setdate(e.target.value)
}

function settimes(e){
    settime(e.target.value)
}

function table(){
    setwrdis(true)
}

function setintel(e){
    settel(e.target.value)
    if (tel.length===10){
       const tel = e.target.value
        settime2(tel)
        const tel1 = tel[0]+" - ("+tel[1]+tel[2]+tel[3]+") - "+tel[4]+tel[5]+tel[6] +" - "+tel[7]+tel[8]+" - " +tel[9]+tel[10]
        console.log(tel1.length)
        settel(tel1)
    }
    if (tel.length===22){
       
       
        settel("")
    }

}


  



function submit(){
    
    setwrdis(false)
    let message = `Имя: ${name} \n`
        message+="                                                   "
        message+= `телефон: ${time2} \n`
        message+="                                                   "
        message+=`Количество персон: ${homo} \n`
        message+="                                                   "
        message+=`Дата: ${data}\n`
        message+="                                                   "
        message+=`время: ${time}\n`
   
    
    


    fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatID}&text=${message}`,{method:"GET"})

}

  return (
    <>
    <div className="bron_wr">
        <div className="img_head">
        <img src={logo1} alt="" />
        </div>
        <div className="logotip"><img src={logo3} alt="" className='logotip'/></div>
        <div className={wrdis?"wr_content":"wr_content none"}>
        
            <h2 className='bron_h2'>Бронирование столика</h2>
            <input type="text" name="name" placeholder='Ваше имя' value={name} 
            onChange={setnames}/>
            
            <input 
            type="tel" 
            name="tel" 
            placeholder="номер телефона" 
            value={tel} onChange={setintel}/>
            
            <input type="tel" placeholder="Количетво персон" onChange={sethomes} value={homo} />
            
                <div className="data_wr">
                    <label for="time" className="data_label" >Время</label>
                    <input type="time" 
                            name="" id="time" 
                            className='data'
                            onChange={settimes} 
                            value={time}/>
                </div>
                <div className="data_wr">
                    <label for="date" className="data_label">Дата</label>
                    <input type="date" name="" id="date" className='data' onChange={setdates} value={data}/>
                </div>
                <div className="wr_button">
                    <div className="button" onClick={submit}>Отправить</div>
                </div>
        </div>
        <div className={wrdis?"none":"done"} onClick={table}>Столик забронирован</div>
        <div className="img_footer">
        <img src={logo2} alt="" />
        </div>
    </div>
    </>
  )
}

export default Bron