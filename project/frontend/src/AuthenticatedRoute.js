import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AuthenticatedRoute = ({ condition, redirectPath, ...props }) => {
  if (!condition) {
    return <Navigate to={redirectPath} />;
  }

  return <Route {...props} />;
};

export default AuthenticatedRoute;
