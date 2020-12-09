import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import App from '../components/App';

import config from './config';

const getApiUrl = spaceId => {
  if (spaceId) {
    return `${config.serverUrl}/api/space/${spaceId}`;
  }
  return `${config.serverUrl}/api/space`;
};

const getInitialData = (spaceId, apiData) => {
  if (spaceId) {
    return {
      currentSpaceId: apiData.id,
      spaces: {
        [apiData.id]: apiData
      }
    };
  }
  return {
    spaces: apiData.spaces
  };
};

const serverRender = (spaceId) => 
  axios.get(getApiUrl(spaceId))
    .then(resp => {
      const initialData = getInitialData(spaceId, resp.data);
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initalData={initialData} />
        ),
        initialData
      };
    });

export default serverRender;