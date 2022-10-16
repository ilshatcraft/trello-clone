import React,{useState} from 'react'
import Task from './Task'

export default function Card() {
  const [cards,setCards]=useState([
    {id:1,title:'test',body:'Description',body_extended:'body ext'},
    {id:2,title:'test',body:'Description',body_extended:'body ext'},
    {id:3,title:'test',body:'Description',body_extended:'body ext'},
])

  return (
    <div> {cards.map(card=>
    <Task card={card}></Task>
    )}
      </div>
  )
}
