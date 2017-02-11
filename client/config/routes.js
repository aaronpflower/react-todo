const React = require('react')
const ReactRouter = require('react-router')
const Router = ReactRouter.Router
const Route = ReactRouter.Route
const IndexRoute = ReactRouter.IndexRoute
const hashHistory = ReactRouter.hashHistory
const Main = require('../containers/MainContainer')
const Home = require('../containers/HomeContainer')
const TodoList = require('../containers/TodoListContainer')

const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='todo-list' component={TodoList} />
        </Route>
    </Router>
)

module.exports = routes;