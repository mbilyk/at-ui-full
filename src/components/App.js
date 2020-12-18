import React from 'react';

import SpaceList from './SpaceList';
import PropTypes from 'prop-types';
import * as api from '../api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      spaces: {},
    };
  }

  componentDidMount() {
    api.fetchSpaceList().then(resp => {
      this.setState({
        spaces: resp
      });
    });
    // axios.get('api/space')
    //   .then(resp => {
    //     this.setState({
    //       spaces: resp.data.spaces
    //     });
    //   });
  }

  render() {
    return (
      <div>
        <SpaceList spaces={this.state.spaces} />
      </div>
    );
  }
}

App.propTypes = {
  initialData: PropTypes.object
};

export default App;