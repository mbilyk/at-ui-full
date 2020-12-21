import React from 'react';

import SpaceList from './SpaceList';
import PropTypes from 'prop-types';
import * as api from '../api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      spaces: {},
      entries: {},
      assets: {},
      activeIndex: 0
    };
    this.handleSpaceChange = this.handleSpaceChange.bind(this);
  }

  componentDidMount() {
    api.fetchSpaceList().then(spaceResp => {
      api.fetchAssets(Object.keys(spaceResp)[this.state.activeIndex])
        .then(assetsResp => {
          this.setState({
            assets: assetsResp,
          });
        });
      api.fetchEntries(Object.keys(spaceResp)[this.state.activeIndex])
        .then(entriesResp => {
          this.setState({
            entries: entriesResp,
          });
        });
      this.setState({
        spaces: spaceResp
      });
    });
  }

  handleSpaceChange(e, data) {
    api.fetchEntries(Object.keys(this.state.spaces)[data.activeIndex])
      .then(resp => this.setState({
        entries: resp
      }));
    api.fetchAssets(Object.keys(this.state.spaces)[data.activeIndex])
      .then(resp => this.setState({
        assets: resp
      }));
  }

  render() {
    return (
      <div>
        <SpaceList 
          spaces={this.state.spaces} 
          activeIndex={this.state.activeIndex} 
          handleSpaceChange={this.handleSpaceChange}
          entries={this.state.entries}
          assets={this.state.assets} 
        />
      </div>
    );
  }
}

App.propTypes = {
  initialData: PropTypes.object
};

export default App;