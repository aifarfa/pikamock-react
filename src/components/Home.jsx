import React from 'react';
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import Hello from './Hello'
import {onLoad} from '../modules/home'
import shallowCompare from 'react-addons-shallow-compare'

/**
 * dump component
 */
export class Home extends React.Component {

  componentDidMount() {
    this.props.onLoad();
  }

  componentWillUpdate() {
    // console.log('Home componentWillUpdate');
  }

  shouldComponentUpdate(nextProps, nextState) {
    let changed = shallowCompare(this, nextProps, nextState);
    // console.log('Home shouldComponentUpdate', changed)
    return changed
  }

  render() {
    return (
      <div>
        <Hello isLoading={this.props.isLoading}/>
      </div>
    );
  }
}

Home.propTypes = {
  isLoading: React.PropTypes.bool
}

const propsMapper = (state) => {
  return {
    isLoading: state.getIn(['home', 'isLoading'])
  }
}

const actionMapper = (dispatch) => {
  return {onLoad: onLoad(dispatch)}
}

/**
 * default connected component
 */
export default connect(propsMapper, actionMapper)(Home)
