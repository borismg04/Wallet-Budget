import React from 'react'
import Gasto from './Spent'

const ExpensesList = ({gastos}) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{
        gastos.length ? 'Gastos 📉' : 'No hay Gastos aún 😐'
      }</h2>

      {gastos.map(gasto => (
        <Gasto 
          key={gasto.id}
          gasto={gasto}
        />
      ))}
    </div>
  )
}

export default ExpensesList
