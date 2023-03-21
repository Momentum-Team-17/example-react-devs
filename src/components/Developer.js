import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Developer({ devGithubName }) {
  const [expanded, setExpanded] = useState(false)
  const [repos, setRepos] = useState(null)

  // useEffect is called after each render
  useEffect(() => {
      console.log("useEffect runs")
      const URL=`https://api.github.com/users/${devGithubName}/repos`
    // we're using JS Promises
    axios.get(URL).then((response) => setRepos(response.data) )
  }, [])

  console.log("Developer Component Renders")
  return (
      <h1> HI I AM A DEVELOPER COMPONENT</h1>
    // <div className="card m-4">
    //   <div className="card-content">
    //     <div className="is-flex is-justify-content-space-between">
    //       <h2 className="is-size-4">{dev.name}</h2>
    //       <button
    //         className="button is-light"
    //         onClick={() => setExpanded(!expanded)}
    //       >
    //         Show {expanded ? 'less' : 'more'}
    //       </button>
    //     </div>
    //     {expanded && (
    //       <>
    //         <p className="content m-3">{dev.expertise}</p>
    //         <div className="repo-list">
    //           <ul>
    //             {repos && repos.map(repo => <li>{repo.name}</li>) }
    //           </ul>
    //         </div>
    //       </>
    //       )}
    //   </div>
    // </div>
  )
}


