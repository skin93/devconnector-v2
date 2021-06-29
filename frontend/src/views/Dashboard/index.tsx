import { Fragment, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { authState } from '../../features/auth/authSlice';
import {
  getCurrentProfile,
  profileState,
} from '../../features/profile/profileSlice';

import { FaUser } from 'react-icons/fa';

import * as D from './Dashboard.style';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector(profileState);
  const { user } = useAppSelector(authState);

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  return (
    <Fragment>
      <D.Heading>Dashboard</D.Heading>
      <D.Lead>
        <FaUser /> Welcome {user && user.name}
      </D.Lead>
      {profile !== null ? (
        <Fragment>
          {/* <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} /> */}

          {/* <div className='my-2'>
            <button className='btn btn-danger' onClick={() => deleteAccount()}>
              <i className='fas fa-user-minus' /> Delete My Account
            </button>
          </div> */}
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <D.CreateButton to='/create-profile'>Create Profile</D.CreateButton>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Dashboard;
