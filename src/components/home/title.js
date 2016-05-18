import React, {Component} from 'react';

export default class Title extends Component {
  render() {
    return (
      <div className="title">
        <div className="container">
          <div className="title-text">
            <h1 className="title-text-title">
              A complete set of Yeoman generators to start all your frontend projects
            </h1>
          </div>
          <div className="title-logo">
            <img src="/assets/imgs/artworks/foutainjs-logo6-large-machine.png"/>
          </div>
        </div>
      </div>
    );
  }
}
