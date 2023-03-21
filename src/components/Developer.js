import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Developer({ githubName, name, expertise }) {
  const [repos, setRepos] = useState([])

  // useEffect is called after each render
  useEffect(() => {
    console.log('useEffect runs')
    const URL = `https://api.github.com/users/${githubName}/repos`
    // we're using JS Promises
    axios.get(URL).then((response) => setRepos(response.data))
  }, [githubName])

  console.log('Developer Component Renders')
  return (
    <div className="card m-4">
      <div className="card-content">
        <h2 className="is-size-4">{name}</h2>
        {expertise && <p className="content m-3">Expertise: {expertise}</p>}
        <div className="repo-list">
          <ul>{repos && repos.map((repo) => <li>{repo.name}</li>)}</ul>
        </div>
      </div>
    </div>
  )
}
