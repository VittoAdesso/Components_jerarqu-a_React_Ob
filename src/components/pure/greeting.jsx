import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ** component type class (shortcout rcc | rccp)
class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weight: 100
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Hola { this.props.name }!!! 
                </h1>
                <h2>
                    ¿ Weight ? : { this.state.weight }
                </h2>
                <button onClick={ this.gainMuscles }> More muscle</button>
                <button onClick={ this.lessMuscles }> Less muscle</button>
            </div>
        );
    }
    
    gainMuscles = () => {
        this.setState((prevState) => (
            {
                weight: prevState.weight +10
            }
        ))
    }
    
    lessMuscles = () => {
        this.setState((prevState) => (
            {
                weight: prevState.weight -10
            }
        ))
    }
    
}

Greeting.propTypes = {
    name:PropTypes.string,

};


export default Greeting;
