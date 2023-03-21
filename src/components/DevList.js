import axios from 'axios'
import { useEffect, useState } from 'react'

export default function DevList({setSelectedDev}){
  const [devs, setDevs] = useState([])

  useEffect(() => {
    axios.get('https://node-api-devs-for-hire.glitch.me/devs').then((response)=> setDevs(response.data))
  }, [])

  return (
    <div className="block" >
        {devs && devs.map((dev, index) => {
          return (
            <div
              onClick={() => setSelectedDev(dev)}
              key={index}
              style={{border: '2px solid aquamarine', padding: '10px', margin: '20px'}}
              >
                {dev.name}
            </div>
            )
        })
      }
      </div>
  )
}
