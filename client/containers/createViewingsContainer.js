import { connect } from 'react-redux';

const createViewingsContainer = (FormatComponent) => {
  const mapStateToProps = state => state;
  return connect(mapStateToProps)(FormatComponent);
}

export default createViewingsContainer;