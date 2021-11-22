import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ component: Component, isAdmin: AdminState, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        AdminState ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
export default AdminRoute;
