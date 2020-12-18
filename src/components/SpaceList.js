import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Container } from 'semantic-ui-react';

import SpaceView from './SpaceView';

const SpaceList = ({spaces}) => {
  let panes = Object.keys(spaces).map(spaceId => {
    let paneObj = {};
    paneObj['menuItem'] = spaces[spaceId].fields.title;
    // eslint-disable-next-line react/display-name
    paneObj['render'] = () => 
      <Tab.Pane as={Container} fluid>
        <SpaceView {...spaces[spaceId]} />
      </Tab.Pane>;
    return paneObj;
  });
  
  return(
    <Tab
      grid={{
        paneWidth: 13, 
        tabWidth: 3
      }}
      menu={{
        attached: true,
        pointing: true,
        vertical: true, 
        inverted: true
      }} 
      panes={ panes } 
    />
  );
};

SpaceList.propTypes = {
  spaces: PropTypes.object.isRequired
};

export default SpaceList;