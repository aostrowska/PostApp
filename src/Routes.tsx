import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import DashboardContainer from './modules/dashboard';

const Routes = () => (
  <div>
    <Switch>
      <Route path="/dashboard">
        {/* {isAuthenticated ? <DashboardContainer env={env} /> : <Redirect to="/login" />} */}
        <DashboardContainer />
      </Route>
    </Switch>
  </div>
);

export default withRouter(Routes);
