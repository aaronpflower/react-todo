const React = require('react')
const PropTypes = React.PropTypes
const styles = require('../styles')

function TodoItem (props) {
    const todoNode = props.todoItem.map(function(item) {
        return (<h1>{item.todo}</h1>)
        // console.log
    })
    return (
        <div className="col-xs-12">
            <h1>{todoNode}</h1>
        </div>
    )
}

TodoItem.propTypes = {
    todoItem: PropTypes.array.isRequired
}


module.exports = TodoItem


// const TodoList = ({todos, remove}) => {
//   // Map through the todos
//   const todoNode = todos.map((todo) => {
//     return (<Todo todo={todo} key={todo.id} remove={remove}/>)
//   });
//   return (<ul>{todoNode}</ul>);
// }