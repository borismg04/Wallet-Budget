import { useState } from 'react'
import Message from './Message'

const NewBudget = ({presupuesto,setPresupuesto}) => {

  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e) => {
    setPresupuesto(e.target.value)
    e.preventDefault()
    if(!Number(presupuesto) || Number(presupuesto) < 0){
      setMensaje('No es un presupuesto valido')
    }else{
      console.log('Si es un presupuesto valido')
    } 
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} className='formulario'>
        <div className='campo'>
          <label htmlFor='name'>Definir Presupuesto 🛒</label>
          <input
            className='nuevo-presupuesto'
            type='text' 
            placeholder='Añade tu Presupuesto'
            value={presupuesto}
            onChange={e => setPresupuesto(e.target.value)}
          />  
        </div>

        <input
          type='submit'
          value='Añadir'
        />

        {mensaje && <Message tipo='error'>{mensaje}</Message>}

      <h4>CreateBy:Ing.Boris Monroy G.</h4>
      </form>
    </div>
  )
}

export default NewBudget