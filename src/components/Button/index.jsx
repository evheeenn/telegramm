import React from 'react'

export default function Button({classProp, text, style}) {

  return (
    <button type="submit" className={classProp} style={style}>{text}</button>
  )
}
