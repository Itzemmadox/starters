import React from 'react'
import { useState, useEffect } from 'react'

const ExuseEffect = () => {
  const [resourceType, setResourceType] = useState('posts')
  // const [items, setItems] = useState([])
  // const[windowWidth, setwindowWidth] = useState(window.innerWidth)

  // const handleResize = () => {
  //   setwindowWidth(window.innerWidth)
  // }

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize)

    //cleanup
  //   return (
  //     window.removeEventListener('resize', handleResize)
  //   )
  // }, [])

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //   .then(response => response.json())
    //   .then(json => setItems(json))
    console.log('resource changed');

    return () => {
      console.log('return from resource change');
    }
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => {setResourceType('posts')}}>Posts</button>
        <button onClick={() => {setResourceType('users')}}>USers</button>
        <button onClick={() => {setResourceType('comments')}}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {/* {items.map(items => {
        return <pre>{JSON.stringify(items)}</pre>
      })} */}
      {/* <div>{windowWidth}</div> */}
    </>
  )
}

export default ExuseEffect