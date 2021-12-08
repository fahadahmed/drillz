import React from 'react';
import App from './App';

function Routes() {
  console.log(
    process.env.DRILLZ_APP_API_KEY,
    process.env.DRILLZ_APP_AUTH_DOMAIN,
  );
  return <App />;
}

export default Routes;
