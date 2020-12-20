import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Container } from 'semantic-ui-react';

import SpaceView from './SpaceView';

class SpaceList extends React.Component {

  getPanes = () => 
    Object.keys(this.props.spaces).map(spaceId => {
      let paneObj = {};
      paneObj['menuItem'] = this.props.spaces[spaceId].fields.title;
      // eslint-disable-next-line react/display-name
      paneObj['render'] = () => 
        <Tab.Pane as={Container} fluid>
          <SpaceView {...this.props.spaces[spaceId]} activeIndex={this.props.activeIndex}/>
        </Tab.Pane>;
      return paneObj;
    });
  
  render() {
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
        panes={ this.getPanes() }
        onTabChange={ this.props.handleSpaceChange }
      />
    );
  }
}

SpaceList.propTypes = {
  spaces: PropTypes.object.isRequired,
  handleSpaceChange: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
  entries: PropTypes.object.isRequired
};

export default SpaceList;