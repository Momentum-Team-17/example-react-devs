import './App.css'
import { useState } from 'react'

function App({devs, greeting}) {

  return (
    <div className="container">
      <h1>React Devs for Hire</h1>
      <p>{greeting}</p>
      <div>
        <div>
          { devs.map(dev => {
            return <Developer dev={dev} />
          })
        }
        </div>
      </div>
    </div>
  )
}

function Developer({dev}){
  const [expanded, setExpanded] = useState(false)

  return (
    <div style={{border: '2px solid purple', margin: '10px', padding: '4px'}}>
      <p>{dev.name}</p>
      <button onClick={() => setExpanded(!expanded)}> Show more </button>
      {
        expanded && <p>{dev.expertise}</p>
      }    
    </div>
    )
}

export default App
