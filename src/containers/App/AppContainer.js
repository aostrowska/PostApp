import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Route, Link, withRouter } from 'react-router-dom'

import Home from '../Home/HomeContainer'
import Routes from './routes'

import { markAppAsLoaded } from '../../actions/app'

const App = (props) => {
  props.markAppAsLoaded()

  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>

      <Route component={Routes} />
    </div>
  )
}

App.propTypes = {
  markAppAsLoaded: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  markAppAsLoaded
};

export default withRouter(connect(null, mapDispatchToProps)(App))
