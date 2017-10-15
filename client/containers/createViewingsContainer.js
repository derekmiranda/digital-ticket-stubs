import { connect } from 'react-redux';

import { addNewViewing } from 'actions/creators';

const createViewingsContainer = (FormatComponent) => {
  const mapStateToProps = state => state;
  const mapDispatchToProps = { addNewViewing };
  return connect(mapStateToProps, mapDispatchToProps)(FormatComponent);
}

export default createViewingsContainer;