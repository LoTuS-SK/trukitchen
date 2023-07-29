import React from 'react'
import "../burger/burger.css"
import { useSelector ,useDispatch  } from 'react-redux'

const Ru = () => {
 
  const dispath = useDispatch()
  const ru = useSelector(state => state.one)

  function lang_ch(){
  
    if (ru==="ru"){
     
      dispath({type:"en"})
      dispath({type:"del"})
    }
    if (ru==="en"){
     
      dispath({type:"ru"})
      dispath({type:"del-all"})
    }
  } 

  return (
    <>
     <div className='lang' onClick={lang_ch}>{ru}</div>
    </>
 
  )
}

export default Ru