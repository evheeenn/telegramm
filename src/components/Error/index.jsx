import React from "react";
import styles from './style.module.css'

export default function Error({display, text}) {
  return (
    <div
    style={{
      display: display,
      alignItems: 'center',
      width: '95%',
      height: '57px',
      marginTop: '27px',
      backgroundColor: '#efdfde',
      border: '1px solid #ead6d7',
      borderRadius: '7px'
    }}
    > 
      <p style={{
        color: '#b37370',
        fontWeight: '500',
        marginTop: '11px',
        marginLeft: '17px'
      }}>{text}</p>
    </div>
  );
}
