// Code EyesOnMe Component Here
import React from 'react'

const EyesOnMe = () => {
  return (
    <div>
        <button
         onFocus={() => console.log('Good!')}
         onBlur={() => console.log('Hey! Eyes on me!')}
        >Eyes on me</button>
    </div>
  )
}

export default EyesOnMe