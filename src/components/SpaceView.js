import React from 'react';
import PropTypes from 'prop-types';


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
        <div className="space-preview-panel">
          <h3 className="space-preview-name">{this.props.fields.title}</h3>
          <span>created by: {this.props.sys.createdBy}</span>
          <span>ActiveIndex: {this.props.activeIndex}</span>
        </div> 
      </div>
    );
  }
}

SpaceView.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  fields: PropTypes.object.isRequired,
  sys: PropTypes.object.isRequired
};

export default SpaceView ;