import React, {Component} from 'react';

export default class ChildComponent extends Component {
  render() {
    return (
      <button type="submit" className="submitButton" onClick={this.props.onClick}>Submit</button>
    );
  }
}
