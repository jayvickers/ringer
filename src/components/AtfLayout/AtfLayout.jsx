// This is a comment from Logan
import React, { Component } from 'react';
import './_atf-layout.less';

class AtfLayout extends Component {
    render() {
      return (
        <div className="atf-layout" >
          {/* call top pane here, replace hard code with real component */}
          <div className="top-pane" />
          {/* call bottom pane here, replace hard code with real component */}
          <div className="bottom-pane">
          <div className="action-pane" />
          </div> 
        </div>
      );
    }
  }
  export default AtfLayout