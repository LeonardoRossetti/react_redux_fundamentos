import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = { description: '', list: [] }

        /**
         * No React o objeto 'this' muda conforme 
         * quem chamou a função e não como nas outras linguagens.
         * Para que, independente de quem chame essa função
         * o 'this' seja sempre o componente atual, ou
         * nesse caso, a classe Todo.
         */
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }
    
    handleAdd() {
        console.log(this.state.description)
    }
    
    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm description = {this.state.description}
                 handleAdd={this.handleAdd}
                 handleChange={this.handleChange} />
                <TodoList />
            </div>
        )
    }
}