import { Fragment, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { authState, deleteAccount } from '../../features/auth/authSlice';
import {
  getCurrentProfile,
  profileState,
  clearProfile,
  deleteProfile,
} from '../../features/profile/profileSlice';

import { Container } from '../../styles/GlobalStyle';

import { FaUser, FaUserMinus } from 'react-icons/fa';

import * as D from './Dashboard.style';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector(profileState);
  const { user } = useAppSelector(authState);

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(deleteProfile());
    dispatch(clearProfile());
    dispatch(deleteAccount());
  };

  return (
    <Container>
      <D.Heading>Dashboard</D.Heading>
      <D.Lead>
        <FaUser /> Welcome {user && user.name}
      </D.Lead>
      {profile !== null ? (
        <Fragment>
          {/* <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} /> */}

          <D.Wrapper>
            <D.DeleteButton onClick={handleClick}>
              <FaUserMinus /> Delete My Account
            </D.DeleteButton>
          </D.Wrapper>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <D.CreateButton to='/create-profile'>Create Profile</D.CreateButton>
        </Fragment>
      )}
    </Container>
  );
};

export default Dashboard;
