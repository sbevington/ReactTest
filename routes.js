import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import DINPage from './containers/DINPage'

export default (
  <Route path="/" component={App}>
    <Route path="/din/:din"
        component={DINPage} />
    <Route path="/din"
        component={App} />
  </Route>
)
