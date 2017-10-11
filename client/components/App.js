import React from 'react';

import createViewingsContainer from 'containers/createViewingsContainer';
import GridFormat from './GridFormat';

const GridContainer = createViewingsContainer(GridFormat);

const App = () => <GridContainer />;

export default App;