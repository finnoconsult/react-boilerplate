import React from 'react';

import { Layout } from '@finnoconsult/core-view';


const App = () => (
  <Layout
    header={() => <h1>header</h1>}
    nav={() => <>nav</>}
    left={() => 'left'}
    right={() => <div>right</div>}
    footer={() => <h1>tab</h1>}
  >
    main
  </Layout>
);

export default App;
