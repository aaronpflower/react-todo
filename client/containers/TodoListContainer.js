const React = require('react')
const Input = require('../components/input')
const List = require('../components/list')

const TodoList = React.createClass({
    getInitialState: function () {
        return {
            todo: '',
            todoList: []
        }
    },

    handleUpdateTodo: function (e) {
        return this.setState({
            todo: e.target.value
        })
    },

    handleSubmitTodo: function(e) {
        e.preventDefault()
        let todo = this.state.todo
        this.setState({
            todo: ''
        })
        return this.setState({
            todoList: this.state.todoList.concat([{todo: todo, completed: false}])
        })
    },

    render: function() {
        return (
            <div className='col-xs-12'>
                < List
                todoList={this.state.todoList} />
                <Input
                onUpdateTodo={this.handleUpdateTodo} 
                onSubmitTodo={this.handleSubmitTodo} 
                todo={this.state.todo} />
            </div>
        )
    }
})

module.exports = TodoList