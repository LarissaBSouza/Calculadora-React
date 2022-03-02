import React, { Component} from 'react';
import './Calculadora.css';
import Display from '../components/Display/Display'
import Button from '../components/Button/Button'

class Calculadora extends Component {

    render(){

        return (
            <div className="calculadora">
                <Display value={100}/>
                <Button label="AC" />
                <Button label="/" />
                <Button label="7" />
                <Button label="8" />
                <Button label="9" />
                <Button label="X" />
                <Button label="4" />
                <Button label="5" />
                <Button label="6" />
                <Button label="-" />
                <Button label="3" />
                <Button label="2" />
                <Button label="1" />
                <Button label="+" />
                <Button label="0" />
                <Button label="." />
                <Button label="=" />
            </div>
        )
    }
}

export default Calculadora;