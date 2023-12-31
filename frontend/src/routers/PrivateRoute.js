import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  is_active: LoginState,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        LoginState ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
export default PrivateRoute;
