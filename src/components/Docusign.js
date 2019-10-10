import React from 'react';

class DocusignModal extends React.Component {
  render() {
    const modal = this.props.showModal ? <div id="ds-clickwrap"></div> : null;
    return (
      <div>
        {modal}
      </div>
    );
  }
}

export default DocusignModal;