import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

const List = ({display,back,list}) => {
    console.log(list)


    const notify = () => toast('Here is your toast.');
  return (
    
    <>
    <div><Toaster/></div>
    <div className={display?"list":"list none"}>
        <div className='btn-back' onClick={back}>←</div>
        <h1>Заказ</h1>
        {list.map(el=>(
            <h3 className="items"onClick={notify}>{el.name} - {el.count}</h3>
        ))}
    </div>
    
    </>
  )
}

export default List