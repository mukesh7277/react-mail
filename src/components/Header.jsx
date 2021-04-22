import React from 'react';
import BlurLinearIcon from '@material-ui/icons/BlurLinear';

function Header() {
  return (
    <header className="row">
      <div className="col-4">
        <BlurLinearIcon />
        <span style={{ marginLeft: 15 }}>Outlook</span>
        <div className="circle">
          <div className="notification-count">
            <span className="text">5</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
