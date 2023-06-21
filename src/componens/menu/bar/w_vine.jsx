import React from 'react'
import { vine } from '../../../data/basevine'
import "./bar"

const W_VINE = ({display,back,add}) => {
  
    
  
    return (
    <div className={display?"w_wr_vine":"w_wr_vine none"}>
    <h2 className='h2'>ВИНА ПО БОКАЛАМ </h2>
    {vine.filter(el=>(el.price<1000)&&(el.type==="белое")).map((el,index)=>(
        <div className='vine-items' key={index}><div className='items' onClick={add}>{el.name}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
    
    <h2 className='h2'>RUSSIA / РОССИЯ  </h2>
    {vine.filter(el=>(el.country==="Россия")&&(el.type==="белое")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{el.name}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
    <h2 className='h2'>FRANCE / ФРАНЦИЯ </h2>
    {vine.filter(el=>(el.country==="Франция")&&(el.type==="белое")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{el.name}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
  <h2 className='h2'>ITALY / ИТАЛИЯ</h2>
    {vine.filter(el=>(el.country==="Италия")&&(el.type==="белое")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{el.name}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
    <h2 className='h2'>SPIN / ИТАЛИЯ</h2>
    {vine.filter(el=>(el.country==="Италия")&&(el.type==="белое")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{el.name}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
    <h2 className='h2'>SPIN / ИТАЛИЯ</h2>
    {vine.filter(el=>(el.country==="Италия")&&(el.type==="белое")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{el.name}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
    <h2 className='h2'>USA / США</h2>
    {vine.filter(el=>(el.country==="США")&&(el.type==="белое")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{el.name}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
  <h2 className='h2'>CHILI / ЧИЛИ </h2>
    {vine.filter(el=>(el.country==="чили")&&(el.type==="белое")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{el.name}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
  <h2 className='h2'>USA / США</h2>
    {vine.filter(el=>(el.country==="США")&&(el.type==="белое")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{el.name}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
     <h2 className='h2'>ARGENTINE / АРГЕНТИНА </h2>
    {vine.filter(el=>(el.country==="Аргентина")&&(el.type==="белое")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{el.name}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
     <h2 className='h2'>SOUTH AFRICA / ЮАР </h2>
    {vine.filter(el=>(el.country==="Аргентина")&&(el.type==="белое")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{el.name}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
     <h2 className='h2'>ARGENTINE / АРГЕНТИНА красное</h2>
    {vine.filter(el=>(el.country==="Аргентина")&&(el.type==="белое")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{el.name}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
     <h2 className='h2'>GERMANY / ГЕРМАНИЯ </h2>
    {vine.filter(el=>(el.country==="Германия")&&(el.type==="белое")).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{el.name}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
  <h2 className='h2'>AUSRIA / АВСТРИЯ </h2>
    {vine.filter(el=>(el.country==="Австрия")&&(el.type==="белое")&&(el.price>1000)).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{el.name}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
    <h2 className='h2'>AUSTRALLIA / АВСТРАЛИЯ </h2>
    {vine.filter(el=>(el.country==="Австралия")&&(el.type==="белое")&&(el.price>1000)).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{el.name}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
    <h2 className='h2'>NEW ZELAND / Новая Зеландия </h2>
    {vine.filter(el=>(el.country==="Новая зеландия")&&(el.type==="белое")&&(el.price>1000)).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{el.name}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
    <h2 className='h2'>OTHER COUNRTRIES/ Другие страны </h2>
    {vine.filter(el=>(el.country==="Другие страны")&&(el.type==="белое")&&(el.price>1000)).map(el=>(
        <div className='vine-items'><div className='items' onClick={add}>{el.name}</div><span className='h2'>{el.price} ₽</span></div>
    ))}
  
  
  
  <div className='btn-back' onClick={back}>←</div>
    </div>
  )
}

export default W_VINE