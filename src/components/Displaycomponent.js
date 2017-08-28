import React, {Component} from 'react';

export default class DisplayComponent extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <p className="chatLog">Chat Log</p>
          <h6 className="card-subtitle mb-2 text-muted">Messages appear here...</h6>
          <p className="card-text">{this.props.sayWhat}</p>
        </div>
      </div>
    );
  }
}
