import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
const devs = [
  { name: 'Gerardo', expertise: 'JS, photography', githubName: "GerardoRoman" },
  { name: 'Emmaline', expertise: 'JS, sewing', githubName: "esaintb" },
  { name: 'Chris', expertise: 'dropping things, JS', githubName: "chriscors" },
  { name: 'Michael', expertise: 'music, JS', githubName: "MichaelGreason" },
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App devs={devs} />
  </React.StrictMode>
)
