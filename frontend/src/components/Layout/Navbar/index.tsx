import { Fragment } from 'react';
import { FaUser, FaSignOutAlt, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { logout, authState } from '../../../features/auth/authSlice';

import * as N from './Navbar.style';

const Navbar = () => {
  const { isAuthenticated, isLoading } = useAppSelector(authState);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  const authLinks = (
    <N.NavItems>
      <N.NavItem>
        <N.NavLink to='/profiles'>Developers</N.NavLink>
      </N.NavItem>
      <N.NavItem>
        <N.NavLink to='/posts'>Posts</N.NavLink>
      </N.NavItem>
      <N.NavItem>
        <N.NavLink to='/dashboard'>
          <FaUser /> <N.StyledSpan>Dashboard</N.StyledSpan>
        </N.NavLink>
      </N.NavItem>
      <N.NavItem>
        <N.NavLink to='/' onClick={handleLogout}>
          <FaSignOutAlt /> <N.StyledSpan>Logout</N.StyledSpan>
        </N.NavLink>
      </N.NavItem>
    </N.NavItems>
  );

  return (
    <N.Navbar>
      <h1>
        <Link to='/'>
          <FaCode /> DevConnector
        </Link>
      </h1>
      {!isLoading && <Fragment>{isAuthenticated && authLinks}</Fragment>}
    </N.Navbar>
  );
};

export default Navbar;
