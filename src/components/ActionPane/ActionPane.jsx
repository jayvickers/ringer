import React, { Component } from "react";
import PropTypes from "prop-types";
import "./_action-pane.less";

class ActionPane extends Component {
  getActionPaneBodyContent = () => {
    const { headerText } = this.props;
    return (
      <div className="action-pane-content-container">
        <h1>Floating labels demo</h1>

        <p>
          By <a href="https://twitter.com/thatemil">@thatemil</a>
        </p>
        <form action="">
          <div class="field">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Jane Appleseed"
            />
            <label for="fullname">Name</label>
          </div>

          <div class="field">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="jane.appleseed@example.com"
            />
            <label for="email">Email</label>
          </div>
        </form>

        <p>
          Will probably work crap in lots of browsers. Works OK in recent
          Chrome, WebKit/Safari. See the{" "}
          <a href="http://thatemil.com/blog/2016/01/23/floating-label-no-js-pure-css/">
            accompanying blog post
          </a>
        </p>
      </div>
    );
  };

  render() {
    return <div className="action-pane">{this.getActionPaneBodyContent()}</div>;
  }
}

ActionPane.propTypes = {
  headerText: PropTypes.string
};

export default ActionPane;
