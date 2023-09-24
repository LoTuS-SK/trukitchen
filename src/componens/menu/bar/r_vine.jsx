import React from 'react'
import {vine} from '../../../data/basevine'
import "./bar_m"
import { useSelector } from 'react-redux'

const R_vine = ({display,back,add}) => {
  
    const ru = useSelector(state=>state.one)
    return (
    
    <div className={display?"r_wr_vine":"r_wr_vine none"}>
    <div className='btn-back' onClick={back}>←</div>
    <h2 className='h2'>ВИНА ПО БОКАЛАМ </h2>  
    
    {vine.filter(el=>(el.price<1000)&&(el.type==="красное")).map(el=>(
        <div className='vine-items'><div  className='items' onClick={add}>{ru==="ru"?el.name:el.name_en}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
    
    <h2 className='h2'>RUSSIA / РОССИЯ  </h2>
    {vine.filter(el=>(el.country==="Россия")&&(el.type==="красное")&&(el.price>1000)).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{ru==="ru"?el.name:el.name_en}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
    <h2 className='h2'>FRANCE / ФРАНЦИЯ </h2>
    {vine.filter(el=>(el.country==="Франция")&&(el.type==="красное")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{ru==="ru"?el.name:el.name_en}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
  <h2 className='h2'>ITALY / ИТАЛИЯ</h2>
    {vine.filter(el=>(el.country==="Италия")&&(el.type==="красное")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{ru==="ru"?el.name:el.name_en}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
    <h2 className='h2'>SPIN / ИСПАНИЯ</h2>
    {vine.filter(el=>(el.country==="Испания")&&(el.type==="красное")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{ru==="ru"?el.name:el.name_en}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
  
    <h2 className='h2'>USA / США</h2>
    {vine.filter(el=>(el.country==="США")&&(el.type==="красное")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{ru==="ru"?el.name:el.name_en}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
  <h2 className='h2'>CHILI / ЧИЛИ </h2>
    {vine.filter(el=>(el.country==="чили")&&(el.type==="красное")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{ru==="ru"?el.name:el.name_en}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
  <h2 className='h2'>USA / США</h2>
    {vine.filter(el=>(el.country==="США")&&(el.type==="красное")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{ru==="ru"?el.name:el.name_en}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
     <h2 className='h2'>ARGENTINE / АРГЕНТИНА </h2>
    {vine.filter(el=>(el.country==="Аргентина")&&(el.type==="красное")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{ru==="ru"?el.name:el.name_en}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
     <h2 className='h2'>SOUTH AFRICA / ЮАР </h2>
    {vine.filter(el=>(el.country==="Аргентина")&&(el.type==="красное")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{ru==="ru"?el.name:el.name_en}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
     <h2 className='h2'>ARGENTINE / АРГЕНТИНА </h2>
    {vine.filter(el=>(el.country==="Аргентина")&&(el.type==="красное")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{ru==="ru"?el.name:el.name_en}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
     <h2 className='h2'>GERMANY / ГЕРМАНИЯ </h2>
    {vine.filter(el=>(el.country==="Германия")&&(el.type==="красное")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{ru==="ru"?el.name:el.name_en}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
  <h2 className='h2'>AUSRIA / АВСТРИЯ </h2>
    {vine.filter(el=>(el.country==="Австрия")&&(el.type==="красное")&&(el.price>1000)).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{ru==="ru"?el.name:el.name_en}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
    <h2 className='h2'>AUSTRALLIA / АВСТРАЛИЯ </h2>
    {vine.filter(el=>(el.country==="Австралия")&&(el.type==="красное")&&(el.price>1000)).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{ru==="ru"?el.name:el.name_en}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
    <h2 className='h2'>NEW ZELAND / Новая Зеландия </h2>
    {vine.filter(el=>(el.country==="Новая зеландия")&&(el.type==="красное")&&(el.price>1000)).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{ru==="ru"?el.name:el.name_en}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
   
    <div className='btn-back' onClick={back}>←</div>
    </div>
  )
}

export default R_vine