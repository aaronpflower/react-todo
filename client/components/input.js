const React = require('react')
const PropTypes = React.PropTypes
const styles = require('../styles')

function Input (props) {
    return (
        <div className="row center-xs">
            <input
                className="col-xs-12"
                style={styles.input}
                type='text'
                placeholder='Add Todo'
                value={props.todo}
                onChange={props.onUpdateTodo}
            />
            <button
                className="col-xs-12"
                style={styles.button}
                className="btn btn-block btn-success"
                type="submit"
                onClick={props.onSubmitTodo}>
                Continue
            </button>
        </div>
    )
}

Input.propTypes = {
    onUpdateTodo: PropTypes.func.isRequired,
    onSubmitTodo: PropTypes.func.isRequired,
    todo: PropTypes.string.isRequired
}


module.exports = Input