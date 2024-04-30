import React from 'react'

function Title({text, className}) {
  return (
    <div className="-rotate-6">
    <h1 className="text-3xl font-bold hover:text-green-400 transition-all">
       {text}
    </h1>
    <div className="w-24 h-2 bg-green-500 rounded-full"></div>
    <div className="w-24 h-2 bg-indigo-500 rounded-full translate-x-3"></div>
</div>
  )
}

export default Title