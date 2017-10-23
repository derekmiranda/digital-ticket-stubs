import { connect } from 'react-redux';

import { addNewViewing, editViewing, editNewViewing } from 'actions/creators';

const createViewingsContainer = (FormatComponent) => {
  const mapStateToProps = state => state;
  const mapDispatchToProps = { addNewViewing, editViewing, editNewViewing };
  return connect(mapStateToProps, mapDispatchToProps)(FormatComponent);
}

export default createViewingsContainer;