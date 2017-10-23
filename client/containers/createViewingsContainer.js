import { connect } from 'react-redux';

import { addNewViewing, editViewing } from 'actions/creators';

const createViewingsContainer = (FormatComponent) => {
  const mapStateToProps = state => state;
  const mapDispatchToProps = { addNewViewing, editViewing };
  return connect(mapStateToProps, mapDispatchToProps)(FormatComponent);
}

export default createViewingsContainer;