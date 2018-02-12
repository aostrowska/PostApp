import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Callback = ({ isLoggedIn }) => {
  console.log('callback!')
  return (
  <Fragment>
    {
      isLoggedIn ? (
        <Redirect to="/dashboard" />
      ) : (
        <Redirect to="/login" />
      )
    }
  </Fragment>
)
}

Callback.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});

export default connect(mapStateToProps)(Callback)