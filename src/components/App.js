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
      activeIndex: 0
    };
    this.handleSpaceChange = this.handleSpaceChange.bind(this);
  }

  componentDidMount() {
    api.fetchSpaceList().then(stateResp => {
      api.fetchEntries(Object.keys(stateResp)[this.state.activeIndex])
        .then(entriesResp => this.setState({
          entries: entriesResp,
        }));
      this.setState({
        spaces: stateResp
      });
    });
  }

  handleSpaceChange(e, data) {
    api.fetchEntries(Object.keys(this.state.spaces)[data.activeIndex])
      .then(resp => this.setState({
        entries: resp,
        activeIndex: data.activeIndex
      }));
    //this.setState({activeIndex:data.activeIndex});
  }

  render() {
    return (
      <div>
        <SpaceList 
          spaces={this.state.spaces} 
          activeIndex={this.state.activeIndex} 
          handleSpaceChange={this.handleSpaceChange}
          entries={this.state.entries} 
        />
      </div>
    );
  }
}

App.propTypes = {
  initialData: PropTypes.object
};

export default App;