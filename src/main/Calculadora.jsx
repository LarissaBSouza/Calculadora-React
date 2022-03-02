import React, { Component } from 'react';
import './Calculadora.css';
import Button from '../components/Button/Button';
import Display from '../components/Display/Display';


const state = { 
    displayValue: '0', 
    clearDisplay: false, 
    operacao: null,
    valor: [0, 0], 
    resultado: 0 
}

class Calculadora extends Component {

    state = { ...state }

    
    clearMemory = () => {
        this.setState({...state});
    }

    setOperacao = (operacao) => {
        
        if (this.state.resultado == 0) {
  
            this.setState({operacao, resultado: 1, clearDisplay: true});

        } else {
            
            const equals = operacao == "="; 
            const resultadoOperacao = this.state.operacao;
            const valor = [...this.state.valor];

            
            switch(resultadoOperacao) {
                case "+":
                    valor[0] += valor[1];
                    break;
                case "-":
                    valor[0] -= valor[1];
                    break;
                case "*":
                    valor[0] *= valor[1];
                    break;
                case "/":
                    valor[0] /= valor[1];
                    break;
                default:
                    valor[0] = this.state.valor[0];
            }

            valor[1] = 0;

            
            if (valor[0] % 1 != 0) {
                this.setState({
                    displayValue: String(valor[0].toFixed(3)) 
                });
            } else {
                this.setState({
                    displayValue: String(valor[0])
                });
            }

            this.setState({
                operacao: equals ? null : operacao,
                valor: [...valor],
                resultado: equals ? 0 : 1,
                clearDisplay: !equals // 
            });
            
        }
    }


    addDigit = (num) => {
       
        if (num == "." && this.state.displayValue.includes(".")) {
            return
        }

        const clearDisplay = this.state.displayValue == "0" || this.state.clearDisplay;
        const resultadoValue = clearDisplay ? "" : this.state.displayValue;
        const displayValue = resultadoValue + num;
        this.setState({displayValue, clearDisplay: false});

        
        if (num !== ".") {
            const i = this.state.resultado;
            const newValue = parseFloat(displayValue);
            const valor = [...this.state.valor];
            valor[i] = newValue;
            this.setState({valor});
        }
        
    }

    render() {
        return (
            <div className="calculadora">
                <Display value={this.state.displayValue}/>
                <Button label="AC" triple click={this.clearMemory}/>
                <Button label="/" operacao click={this.setOperacao}/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" operacao click={this.setOperacao}/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" operacao click={this.setOperacao}/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" operacao click={this.setOperacao}/>
                <Button label="0" double click={this.addDigit}/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" operacao click={this.setOperacao}/>
            </div>
        );
    }
}

export default Calculadora;