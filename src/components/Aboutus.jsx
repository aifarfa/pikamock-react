import React from 'react';

export default class Privacy extends React.Component {

  componentDidMount() {
    // console.log('componentDidMount About')
  }

  render() {
    return (
      <div className="container pikapok__content">
        <div className="row">
          <h3 id="subheader_static"></h3>
          <div className="row">
            <img className="img-responsive" src="../img/aboutus.jpg" />
          </div>
        </div>

      </div>
    ); // return
  }
}
