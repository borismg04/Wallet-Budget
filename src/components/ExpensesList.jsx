import React from 'react'
import Gasto from './Spent'

const ExpensesList = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  gastosFiltrados,
  filtro,
}) => {
  return (
    <div className='listado-gastos contenedor'>
      {
        filtro ? (
          <>
            <h2>
              {gastosFiltrados.length ? 'Gastos 📉' : 'No hay Gastos en esta Categoria 😐'}
            </h2>
            {gastosFiltrados.map(gasto => (
              <Gasto 
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />
            ))}
          </>
        ) : (
          <>
            <h2>
              {gastos.length ? 'Gastos 📉' : 'No hay Gastos aún 😐'}
            </h2>
            {gastos.map(gasto => (
              <Gasto 
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />
            ))
            }
          </>
        )
      }
    </div>
  )
}

export default ExpensesList
