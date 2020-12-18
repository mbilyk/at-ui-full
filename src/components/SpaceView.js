import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';

class SpaceView extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: {},
      assets: {},
      createdAt: '',
      createdBy: '',
      updatedAt: '',
      updatedBy: ''
    };
  }

  componentDidMount() {
    api.fetchSpace(this.props.sys.id).then(resp => {
      return resp;
    });

    this.setState({
      createdAt: this.props.sys.createdAt,
      createdBy: this.props.sys.createdBy,
      updatedAt: this.props.sys.updatedAt,
      updatedBy: this.props.sys.updatedBy
    });
  }

  render() {
    return (
      <div className="SpaceView">
        <div className="space-preview-panel">
          <h3 className="space-preview-name">{this.props.fields.title}</h3>
          <span>created by: {this.state.createdBy}</span>
        </div> 
      </div>
    );
  }
}

SpaceView.propTypes = {
  fields: PropTypes.object.isRequired,
  sys: PropTypes.object.isRequired
};

export default SpaceView ;