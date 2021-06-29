import React, { Component } from 'react';
import { useAppSelector } from '../../app/hooks';
import { Route, Redirect } from 'react-router-dom';
import { authState } from '../../features/auth/authSlice';
import Spinner from '../Layout/Spinner';

const PrivateRoute = ({ ...rest }) => {
  const { isAuthenticated, isLoading } = useAppSelector(authState);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoading ? (
          <Spinner />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};

export default PrivateRoute;
