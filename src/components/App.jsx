import React, {PropTypes} from 'react'
import {Link} from 'react-router'

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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category/0">category-0</Link>
            </li>
            <li>
              <Link to="/category/1">category-1</Link>
            </li>
            <li>
              <Link to="/product/0">product-0</Link>
            </li>
          </ul>
        </nav>
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
