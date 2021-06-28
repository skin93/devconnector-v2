import axios from 'axios';

export const fetchUser = async () => {
  const res = await axios.get('/api/auth');
  return res;
};
