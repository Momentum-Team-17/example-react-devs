import 'bulma/bulma.sass'
import './index.scss'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
function App({ devs, greeting }) {
  return (
    <div className="container">
      <header className='mx-2'>
        <h1 className="is-size-1">React Devs for Hire</h1>
      </header>
      <div className="block">
        {devs.map((dev, index) => {
          return <Developer dev={dev} key={index} />
        })}
      </div>
    </div>
  )
}

function Developer({ dev }) {
  const [expanded, setExpanded] = useState(false)
  const [repos, setRepos] = useState(null)

  // useEffect is called after each render
  useEffect(() => {
      console.log("useEffect runs")
      const URL=`https://api.github.com/users/${dev.githubName}/repos`
    // we're using JS Promises
    axios.get(URL).then((response) => setRepos(response.data) )
  }, [])

  console.log("Developer Component Renders")
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
        {expanded && (
          <>
            <p className="content m-3">{dev.expertise}</p>
            <div className="repo-list">
              <ul>
                {repos && repos.map(repo => <li>{repo.name}</li>) }
              </ul>
            </div>
          </>
          )}
      </div>
    </div>
  )
}

export default App
