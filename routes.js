import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import InputTestPage from './containers/InputTestPage'
import DINPage from './containers/DinPage'
import DINsPage from './containers/DINsPage'

export default (
  <Route path="/" component={App}>
    <Route path="/inputTest"
      component={InputTestPage} />
    <Route path="/din/:din"
      component={DINPage} />
    <Route path="/dinlist"
      component={DINsPage} />
  </Route>
)
