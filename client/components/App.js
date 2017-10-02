import React from 'react';

import createViewingsContainer from 'containers/createViewingsContainer';

const SomeViewingsContainer = createViewingsContainer(
  () => <p>Hey.</p>
)

const App = () => (
  <SomeViewingsContainer />
)

export default App;