import axios from 'axios';

export const fetchContest = spaceId => {
  return axios.get(`/api/space/${spaceId}`).then(resp => resp.data);
};

export const fetchContestList = () => {
  return axios.get('/api/spaces').then(resp => resp.data.spaces);
};