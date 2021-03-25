import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
          <React.Fragment>
            <Sidebar {...props} />
            <Component {...props} />
          </React.Fragment>
        }
    ></Route>
);

export default Layout;