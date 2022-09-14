import { useState } from 'react'
import Header from './components/Header'
import NewBudget from './components/NewBudget'

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  console.log('setPresupuesto:', setPresupuesto)
  console.log('presupuesto:', presupuesto)

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />
      
    </div>
  )
}

export default App
