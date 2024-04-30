import React from 'react'
import Title from './Title'
import { HoverEffect } from './ui/CardHoverEffect'

function Skills({item}) {
  return (
    <div>
            <Title text='Skills'/>
            <HoverEffect items={item}/>
    </div>

  )
}

export default Skills