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
              {gastosFiltrados.length ? 'Gastos π' : 'No hay Gastos en esta Categoria π'}
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
              {gastos.length ? 'Gastos π' : 'No hay Gastos aΓΊn π'}
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
