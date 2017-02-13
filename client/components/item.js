const React = require('react')
const PropTypes = React.PropTypes
const styles = require('../styles')

function Item (props) {
    return (
        <li style={styles.item} className='col-xs-12'>
            {props.todoItem}
        </li>
    )
}

Item.propTypes = {
    todoItem: PropTypes.string.isRequired
    // todoId: PropTypes.number.isRequired,
    // completed: PropTypes.bool.isRequired
}


module.exports = Item
