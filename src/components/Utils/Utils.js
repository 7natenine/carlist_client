import React from 'react'
import { format as formatDate } from 'date-fns'
import './Utils.css'

export function NiceDate({ date, format='Do MMMM YYYY'}) {
  return formatDate(date, format)
}

export function Hyph() {
  return <span className='Hyph'>{' - '}</span> 
}

export function Button({ className, ...props }) { 
  return <button className={['Button', className].join(' ')} {...props} /> 
}

export function Input({ className, ...props }) {
  return (
    <input className={['Input', className].join(' ')}{...props}/> 
  )
}

export function Required({ className, ...props}) { 
  return( 
    <span className={['Required', className].join(' ')} {...props}> 
    </span> 
  )
}

export function TextArea({ className, ...props}) { 
  return( 
    <textarea className={['Textarea', className].join(' ')} {...props}>
    </textarea> 
  )
}

export function InputFile ({ className, ...props }) {
  return(
    <input className={['file', className].join(' ')} {...props}> 
    </input>
  )
}

// Check if this works 
export function Image ({ src, className, ...props }) { 
  return(
    <img src={src} className={['image', className].join(' ')} {...props}>
    </img>
  )
}

export function Section({ className, list, ...props }) {
  const classes = [
    'Section',
    list && 'Section--list',
    className,
  ].filter(Boolean).join(' ')
  return (
    <section className={classes} {...props} />
  )
}

// export function Select ({ className, ...props}) { 
//   return( 
//     <select className=
//   )
// }