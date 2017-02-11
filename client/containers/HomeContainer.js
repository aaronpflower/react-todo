const React = require('react')
const styles = require('../styles')
const Link = require('react-router').Link

const Home = React.createClass({
    render: function() {
        return (
            <div className="col-xs-12">
                <Link to='todo-list'>
                    <button type="button" style={styles.button}>Start List</button>
                </Link>
            </div>
        )
    }
})

module.exports = Home