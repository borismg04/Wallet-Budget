import React from 'react'
import { formatearFecha } from '../helpers';

const Spent = ({gasto}) => {

  const {categoria,nombre,cantidad,id,fecha}= gasto;

  return (
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        {/*IMAGEN*/}
        <div className='descripcion-gasto'>
          <p className='categoria'>{categoria}</p>
          <p className='nombre-gasto'>{nombre}</p>
          <p className='fecha-gasto'>
            Agregado el: {''}
            <span>{formatearFecha(fecha)}</span>
          </p>
        </div>
      </div>
        <p className='cantidad-gasto'>${' '}{cantidad}</p>
    </div>
  )
}

export default Spent