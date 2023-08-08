import React from 'react'
import '../css/message.css'

export const Message = () => {
  return (
    <>
    <div className='image-back mt-4 d-flex align-items-center justify-content-center'>
      <div className='gradient-background '>
        <h5 className='fs-1 text-center'>Restaurant San Pedro, desde 1932 junto a Tí.</h5>
        <p className='fs-3 text-center'>
          <strong >Horario de Atención:</strong><br />
          Lunes a Domingo<br />
          12:00 - 21:00 hrs
        </p>
      </div>
    </div>
    </>
  )
}
