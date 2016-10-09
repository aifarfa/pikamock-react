import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import NavBar from './NavBar'

export default class App extends React.Component {

  componentWillMount() {
    // console.log('WillMount App')
  }

  componentDidMount() {
    // console.log('DidMount App')
  }

  render() {
    return (
      <div>
        <NavBar />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.displayName = 'App'
App.propTypes = {
  children: PropTypes.element
}
