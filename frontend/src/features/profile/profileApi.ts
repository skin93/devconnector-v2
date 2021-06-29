import axios from 'axios';

export const fetchCurrentProfile = async () => {
  const res = await axios.get('/api/profile/me');

  return res.data;
};

export const fetchProfiles = async () => {
  const res = await axios.get('/api/profile');

  return res.data;
};
