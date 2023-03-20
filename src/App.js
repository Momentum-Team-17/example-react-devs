import 'bulma/bulma.sass'
import './index.scss'
import './App.css'
import { useState } from 'react'

function App({ devs, greeting }) {
  return (
    <div className="container">
      <header className='mx-2'>
        <h1 className="is-size-1">React Devs for Hire</h1>
      </header>
      <div className="block">
        {devs.map((dev) => {
          return <Developer dev={dev} />
        })}
      </div>
    </div>
  )
}

function Developer({ dev }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="card m-4">
      <div className="card-content">
        <div className="is-flex is-justify-content-space-between">
          <h2 className="is-size-4">{dev.name}</h2>
          <button
            className="button is-light"
            onClick={() => setExpanded(!expanded)}
          >
            Show {expanded ? 'less' : 'more'}
          </button>
        </div>
        {expanded && <p className="content m-3">{dev.expertise}</p>}
      </div>
    </div>
  )
}

export default App
