import React from 'react'
import QRCode from "react-qr-code";
// import { useSearchParams } from "react-router-dom"


 const Qrcode = () => {

// const [queryParameters] = useSearchParams()
//const query = "https://truekitchen.netlify.app/?name=777"
//const query = "https://truekitchen.netlify.app/?name=888"
// const str = queryParameters.get("name")
  
return (
    <>
    <h1>Заловок</h1>
        <div className='qrcode-wrap' >
         
         <QRCode
             
             size={256}
            //  style={{ height: "auto", maxWidth: "300", width: "100%"}}
             value={"https://truekitchen.netlify.app/?name=777"}
             iewBox={`0 0 500 500`}
           />
   
   </div>

    </>
  )
}

export default Qrcode
