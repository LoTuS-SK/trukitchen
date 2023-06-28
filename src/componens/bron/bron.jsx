import React from 'react'
import logo1 from "../../png/bron/logo1.png"
import logo2 from "../../png/bron/logo2.png"
import "./bron.css"

const Bron = () => {
  return (
    <>
    <div className="bron_wr">
        <div className="img_head">
        <img src={logo2} alt="" />
        </div>
        <div className="wr_content">
            <h2 className='bron_h2'>Бронирование столика</h2>
            <input type="text" name="name" placeholder='Ваше имя'/>
            <input type="tel" name="tel" placeholder="номер телефона"/>
            <input type="numder" placeholder="Количетво персон"/>
            <input type="date" name="" id="" className='data'/>
                <div className="wr_button">
                    <div className="button">Отправить</div>
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