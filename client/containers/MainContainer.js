const React = require('react')
const styles = require('../styles')

const Main = React.createClass({
    render: function() {
        return (
            <div className="row center-xs" style={styles.mainContainer} >
                <h1 className="col-xs-12">Your TodoList</h1>
                {this.props.children}
            </div>
            
        )
    }
})

module.exports = Main