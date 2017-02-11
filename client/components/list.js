const React = require('react')
const PropTypes = React.PropTypes
const styles = require('../styles')
const Item = require('./item')

function List (props) {
    const todoNode = props.todoList.map(function(item) {
        return (<Item todoItem={item.todo} />)
    })
    return (
        <ul className="col-xs-12">
            {todoNode}
        </ul>
    )
}

List.propTypes = {
    todoList: PropTypes.array.isRequired
}


module.exports = List
