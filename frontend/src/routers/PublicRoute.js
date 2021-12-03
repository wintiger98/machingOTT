import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
  component: Component,
  restricted,
  is_active: LoginState,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        LoginState && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default PublicRoute;
