import React ,{ useState }from 'react'
import QRCode from "react-qr-code";
import "./qrcode.css"
// import { useSearchParams } from "react-router-dom"


 const Qrcode = () => {

// const [queryParameters] = useSearchParams()
//const query = "https://truekitchen.netlify.app/?name=777"
//const query = "https://truekitchen.netlify.app/?name=888"
// const str = queryParameters.get("name")
  
const [name,setname] =useState("")
const [table,settable]=useState("")
const [qrdisplay,setqrdisplay]= useState(true)

function funname(e){
  setname(e.target.value)
}

function funtable(e){
  settable(e.target.value)
}
function submit(){
  console.log("da")
  setqrdisplay(false)
  console.log(name)
  console.log(table)
}

function qroff(){
  console.log("da")
  setqrdisplay(true)
}

return (
    <>
    <h1>QR code</h1>
        <div className="wr_input_qr">
            <input type="text" value={name} onChange={funname} placeholder='офицант'/>
            <input type="text" value={table} onChange={funtable} placeholder='номер стола'/>
            <div className="wr_button">
                    <div className="button" onClick={submit}>Cоздвать</div>
                </div>
            
        </div>
        
        <div className={qrdisplay?"wrap none":"qrcode-wrap"} onClick={qroff}>
         

         <QRCode
             
             size={256}
            //  style={{ height: "auto", maxWidth: "300", width: "100%"}}
             value={`https://truekitchen.netlify.app/?name=${name}&table=${table}`}
             iewBox={`0 0 500 500`}
           />
   
   </div>

    </>
  )
}

export default Qrcode
