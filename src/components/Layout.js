import React from "react";
import Navbar from './common/Navbar';

export default ({children}) => (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
);