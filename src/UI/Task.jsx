import React,{useState} from 'react'

export default function Task(props) {

    


  return (
    <div>

      <div> 
        <div>
    <div className='Title'>{props.card.id}.{props.card.title}</div>
    <div className='Body'>{props.card.body}</div>
    <div className='Body_Extended'>{props.card.body_extended}</div>
    </div>
    <div><button>x</button></div>
    </div>

    
  </div>
  )
}
