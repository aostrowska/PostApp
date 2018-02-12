import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CallbackPage from '../../pages/Callback/Callback'
import LogInPage from '../../pages/LogIn/LogIn'
// import DashboardRouting from './pages/Dashboard/Dashboard'

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={CallbackPage} />

      <Route path="/login" component={LogInPage} />

      {/* Dashboard */}
      {/* <Route path="/dashboard" component={DashboardRouting} /> */}

      <Route component={CallbackPage} />
    </Switch>
  </main>
)

export default Routes
