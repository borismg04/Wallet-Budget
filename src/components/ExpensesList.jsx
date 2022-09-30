import React from 'react'
import Gasto from './Spent'

const ExpensesList = ({gastos, setGastoEditar,eliminarGasto}) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{
        gastos.length ? 'Gastos 📉' : 'No hay Gastos aún 😐'
      }</h2>

      {gastos.map(gasto => (
        <Gasto 
          key={gasto.id}
          gasto={gasto}
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
        />
      ))}
    </div>
  )
}

export default ExpensesList
