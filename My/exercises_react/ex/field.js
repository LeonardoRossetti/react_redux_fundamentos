import React, { Component } from 'react';

class Field extends Component {

    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }

        //isso serve para que independente de quem chame essa função o "this" vai apontar para o Field. Agora podemos chamar this.handleChange no evento onChange abaixo
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        //o target é o próprio input
        //nesse caso, tudo o que estiver digitado no input vai 
        //ser setado como o valor desse componente
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <label>{this.state.value}</label><br/>
                {/*o evento onChange espera receber uma função. Se eu chamasse this.handleChange() eu estaria chamando 
                a função, mas ele não espera isso. Ele espera uma função e não a chamada dela.*/}
                <input onChange={this.handleChange} value={this.state.value} />
            </div>
        )
    }
}

export default Field