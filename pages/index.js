import React from 'react'

export default function index() {

  function handleClick() {
    console.log('click')
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick} />
    </div>
  )
}
