const React = require('react')
const PropTypes = React.PropTypes
const styles = require('../styles')
const Item = require('./item')

function List (props) {
    const todoNode = props.todoList.map(function(item, i) {
        return (<Item todoItem={item.todo} key={i} />)
    })
    return (
        <ul className="row center-xs" style={styles.itemContainer} >
            {todoNode}
        </ul>
    )
}

List.propTypes = {
    todoList: PropTypes.array.isRequired
}


module.exports = List
