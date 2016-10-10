import React from 'react';
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import Hello from './Hello'
import {onLoad} from '../modules/home'
import shallowCompare from 'react-addons-shallow-compare'
import {Link} from 'react-router'

import HomeSlider from './HomeSlider.jsx'

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

        <HomeSlider />

        <section className="pikapok__contents" id="main">
          <div className="row pikapok__category-grid">
            <Link to="/category/0">
              <div className="col-xs-12 col-sm-6 category-grid home_cat0">
                <img src="img/block-1.jpg" className="img-responsive"/>
              </div>
            </Link>
            <Link to="/category/1">
              <div className="col-xs-12 col-sm-6 category-grid">
                <img src="img/block-2.jpg" className="img-responsive"/>
              </div>
            </Link>
            <div className="col-xs-12 col-sm-6 category-grid">
              <img src="img/block-3.jpg" className="img-responsive"/>
            </div>
            <Link to="/category/2">
              <div className="col-xs-12 col-sm-6 category-grid">
                <img src="img/block-4.jpg" className="img-responsive" id="last-home-cat" />
              </div>
            </Link>
          </div>
          <div className="">
            <div className="">
              <Link to="/gallery">
                <img className="img-responsive" src="../img/poke-now.jpg" />
              </Link>
            </div>
          </div>
          <div className="">
            <img className="img-responsive" src="../img/before-footer.jpg" />
          </div>
        </section>
        {/* <Hello isLoading={this.props.isLoading}/> */}
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
