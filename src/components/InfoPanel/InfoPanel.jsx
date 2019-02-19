import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./_info-panel.less";

class InfoPanel extends Component {
  getActionPaneBodyContent = () => {
    const { headerText, bodyText, icon } = this.props;
    return (
      <div className="info-panel-container">
        <div className="icon">
          <FontAwesomeIcon icon={icon} size="3x" />
        </div>
        <h3> {headerText} </h3>
        <b> {bodyText} </b>
      </div>
    );
  };

  render() {
    return <div className="info-panel">{this.getActionPaneBodyContent()} </div>;
  }
}

InfoPanel.propTypes = {
  headerText: PropTypes.string,
  bodyText: PropTypes.string,
  image: PropTypes.string
};

export default InfoPanel;
