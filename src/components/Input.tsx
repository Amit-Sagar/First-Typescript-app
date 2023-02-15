import React from 'react'
type InputProps ={
    label: string
    classes?:string
}

const Input = ({label,classes} : InputProps) => {
  return (
    <div className='flex flex-col gap-2'>
     <label className="text-white font-semibold text-lg">{label}</label>
     <input type="text" placeholder={label} className={classes}/>
  </div>
  )
}

export default Input