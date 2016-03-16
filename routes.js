import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import DINPage from './containers/DinPage'
import DINsPage from './containers/DINSPage'

export default (
  <Route path="/" component={App}>
    <Route path="/din/:din"
      component={DINPage} />
    <Route path="/dinlist"
      component={DINsPage} />
    <Route path="/" component={DINsPage} />
  </Route>
)
