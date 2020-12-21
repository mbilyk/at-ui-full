import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'semantic-ui-react';

import Entries from './Entries';
import Assets from './Assets';

class EntriesAndAssetsTab extends React.Component {
  render() {
    return (
      <Tab className="EntriesAndAssetsTab"
        panes={ [
          { menuItem: 'Entries', render: () => <Tab.Pane><Entries entries={this.props.entries} /></Tab.Pane> },
          { menuItem: 'Assests', render: () => <Tab.Pane><Assets assets={this.props.assets} /></Tab.Pane> }
        ] }
      />
    );
  }
}

EntriesAndAssetsTab.propTypes = {
  entries: PropTypes.object.isRequired,
  assets: PropTypes.object.isRequired
};

export default EntriesAndAssetsTab ;