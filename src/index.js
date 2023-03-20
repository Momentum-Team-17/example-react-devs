import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
const devs = [
  { name: 'Gerardo', expertise: 'JS, photography' },
  { name: 'Emmaline', expertise: 'JS, sewing' },
  { name: 'Chris', expertise: 'dropping things, JS' },
  { name: 'Michael', expertise: 'music, JS' },
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App devs={devs} />
  </React.StrictMode>
)
