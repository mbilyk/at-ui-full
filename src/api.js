import axios from 'axios';

export const fetchSpace = spaceId => {
  return axios.get(`/api/space/${spaceId}`)
    .then(resp => resp.data);
};

export const fetchSpaceList = () => {
  return axios.get('/api/space').then(resp => resp.data.spaces);
};

export const fetchEntries = spaceId => {
  return axios.get(`/api/space/${spaceId}/entries`)
    .then(resp => resp.data);
};