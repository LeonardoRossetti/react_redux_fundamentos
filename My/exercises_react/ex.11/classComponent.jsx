import React, {Component} from 'react';

export default class ClassComponent extends Component {
    constructor(props){
        super(props) //tem de chamar o super
        this.state = { value: props.initialValue } //inicializando o estado
    }
    
    sum(delta) {
        //o estado nunca deve ser alterado, somente evoluido
        //sendo assim, sempre que alteramos o estado, criamos uma versão para ele
        //esse é um princípio da programação funcional, onde sempre evolui-se o estado, nunca se altera o valor diretamente
        //se vc tem uma lista e aplica um filtro a essa lista, o resultado será uma nova lista, e não a própria lista modificada.
        //sempre que vc for chamar um valor vc chama diretamente, ex.:this.props.label. Já quando vc for alterar um 
        //valor vc chama o método ex.: this.setState()
        this.setState({ 
            value: this.state.value + delta
        })        
    }

    render() {
        
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                {/* nao chamaos diretamente o método, sempre chamamos uma função que chama o metodo */}
                <button onClick={() => this.sum(-1)}>Dec</button>
                <button onClick={() => this.sum(1)}>Inc</button>
            </div>
        )
    }   
}