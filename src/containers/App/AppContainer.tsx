import React, { FC } from 'react'
import { connect } from 'react-redux';

import { markAppAsLoaded } from '../../actions/app'
import App from '../../App';

interface Props {
  markAppAsLoaded: () => void;
}

const AppContainer: FC<Props> = (props) => {
  props.markAppAsLoaded();

  return <App />
}

const mapDispatchToProps = {
  markAppAsLoaded
};

export default connect(null, mapDispatchToProps)(AppContainer)
