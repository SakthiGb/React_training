// withAuthentication.js
import React from "react";

const withAuthentication = (WrappedComponent) => {
  return function (props) {
    const { isAuthenticated, ...rest } = props;
    if (isAuthenticated) {
      return <WrappedComponent {...rest} />;
    } else {
      return (
        <div className="auth-message">
          Authentication is required to view this profile.
        </div>
      );
    }
  };
};

export default withAuthentication;
