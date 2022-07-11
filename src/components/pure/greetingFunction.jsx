import React, { useState } from 'react'
import PropTypes from 'prop-types'

// ** 2nd type of component
const GreetingFunction = (props) => {
    // ! var , método inicial = valor incial
    const [weight, setWeight] = useState(18);

    // ** método
    const weightGain = () => {
        // actualiza el estado y vista
        setWeight(weight + 1)
    }

  return (
    <div>
        <hr></hr>
        <h1>Hello { props.name }</h1>
        <h2> Now is : { weight }  </h2>
        <button onClick={weightGain }>Gain ??? </button>
    </div>
  )
}; 

GreetingFunction.propTypes = {
    name: PropTypes.string
}

export default GreetingFunction; 
