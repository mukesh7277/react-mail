import React from 'react';

import Header from 'components/Header';

function SiteTemplate({ children }) {
  return (
    <div className="container">
      <Header />
      <div className="app-container">{children}</div>
    </div>
  );
}

export default SiteTemplate;
