import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import EntriesAndAssetsTab from './EntriesAndAssetsTab';


class SpaceView extends React.Component {
  constructor() {
    super();
    this.state = {
      assets: {}
    };
  }

  render() {
    return (
      <div className="SpaceView">
        <Segment className="space-view-segment">
          <Segment>
            <h1 className="space-view-title">{this.props.fields.title}</h1>
            <span>created by: {this.props.sys.createdBy}</span>
          </Segment>
          <Segment>{this.props.fields.description}</Segment>
          <EntriesAndAssetsTab entries={this.props.entries} assets={this.props.assets}/>
        </Segment>
      </div>
    );
  }
}

SpaceView.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  fields: PropTypes.object.isRequired,
  sys: PropTypes.object.isRequired,
  entries: PropTypes.object.isRequired,
  assets: PropTypes.object.isRequired
};

export default SpaceView ;