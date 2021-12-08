import React from 'react';

function Routes() {
  console.log(
    process.env.DRILLZ_APP_API_KEY,
    process.env.DRILLZ_APP_AUTH_DOMAIN,
  );
  return <div>This is the React App.</div>;
}

export default Routes;
