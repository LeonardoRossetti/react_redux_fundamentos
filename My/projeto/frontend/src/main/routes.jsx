import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'
import Curriculum from '../curriculum/curriculum'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <route path='/curriculum' component={Curriculum} />
        <Redirect from='*' to='/curriculum' /> 
    </Router>
)

