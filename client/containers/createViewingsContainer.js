import { connect } from 'react-redux';

const createViewingsContainer = (FormatComponent) => {
  return connect()(FormatComponent);
}

export default createViewingsContainer;