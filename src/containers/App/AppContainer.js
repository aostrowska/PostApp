import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import Home from '../Home/HomeContainer';

import { markAppAsLoaded } from '../../actions/app';

const App = (props) => {
  props.markAppAsLoaded();

  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>

      <main>
        <Route exact path="/" component={Home} />
      </main>
    </div>
  );
};

App.propTypes = {
  markAppAsLoaded: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  markAppAsLoaded
};

export default connect(null, mapDispatchToProps)(App);
