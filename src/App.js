import 'bulma/bulma.sass'
import './index.scss'
import './App.css'
import Developer from './components/Developer'
import DevList from './components/DevList'
import { useState } from 'react'

function App() {
  const [selectedDev, setSelectedDev] = useState('')

  return (
    <div className="container">
      <header className='mx-2'>
        <h1 className="is-size-1">React Devs for Hire</h1>
      </header>
      { selectedDev ? <Developer devGithubName={selectedDev} /> : <DevList setSelectedDev={setSelectedDev} />}
    </div>
  )
}

export default App
