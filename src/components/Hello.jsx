import React from 'react';

export default class Hello extends React.Component {

  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps Hello', nextProps)
  }

  render() {
    const message = !this.props.isLoading
      ? <p>Hello, user</p>
      : <p>processing..</p>

    return (
      <div>
        <h3 className="msg">{message}</h3>
      </div>
    );
  }
}
