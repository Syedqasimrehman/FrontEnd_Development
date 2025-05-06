import React from 'react'
import Button from './Button'
import { cards } from '../constants'
const Active = () => {
  return (
    <>
      <div>
        {cards.map((item) => (
          <div key={item}>
            {item.description}
          </div>
        ))}
      </div></>
    // <Button className={`border-1 bg-amber-600 py-[5px] px-[10px] rounded-3xl`}  text={`Active`}/>
    
  )
}

export default Active
