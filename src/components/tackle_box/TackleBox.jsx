import React from 'react';
import { arrayOf, shape, string, bool } from 'prop-types';

import EmptyTackleBox from './EmptyTackleBox';
import LeftPanel from './LeftPanel';

class TackleBox extends React.Component {
  constructor(props) {
    super(props);

    const { isEmpty, baits } = this.props;

    this.state = {
      selectedBaitId: isEmpty ? null : baits[0].id,
    };

    this.switchBait = this.switchBait.bind(this);
  }

  switchBait(baitId) {
    return () => this.setState({
      selectedBaitId: baitId,
    });
  }

  render() {
    const { baits, isEmpty } = this.props;
    const { selectedBaitId } = this.state;

    return isEmpty ? (
      <EmptyTackleBox />
    ) : (
      <div className="container-fluid">
        <LeftPanel
          baits={baits}
          selectedBaitId={selectedBaitId}
          switchBait={this.switchBait}
        />
      </div>
    );
  }
}

TackleBox.propTypes = {
  isEmpty: bool.isRequired,
  baits: arrayOf(shape({
    name: string,
    category: string,
    image: string,
  })).isRequired,
};

export default TackleBox;
