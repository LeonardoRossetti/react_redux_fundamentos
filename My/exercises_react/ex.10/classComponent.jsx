import React, {Component} from 'react';

/*é usado componente em classe quando se tem um componente
grande que possui outros métodos internos, ou um componente
mais complexo.
O método render tem de ser declarado, para implementar a interface*/
export default class ClassComponent extends Component {
    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }   
}