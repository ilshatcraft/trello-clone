import React,{useState} from 'react'



export default function Main() {

    const [cards,setCards]=useState([
        {id:1,title:'test',body:'Description'},
        {id:2,title:'test',body:'Description'},
        {id:3,title:'test',body:'Description'},
    ])




  return (
    <div>{cards.map(card=><div>Post</div>)}</div>
  )
}
