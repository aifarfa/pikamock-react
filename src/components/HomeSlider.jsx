import React from 'react';
import {Link} from 'react-router'

export default class HomeSlider extends React.Component {

  componentDidMount() {
    console.log('HomeSlider - componentDidMount');
    $('.pikapok__slider').slick({infinite: true, autoplay: true});
  }

  render() {
    return (
        <div className="pikapok__slider col-xs-12">
          <Link to="/gallery"><img className="slider_images img-responsive" src="img/slide-1.jpg"/></Link>
          <Link to="/gallery"><img className="slider_images img-responsive" src="img/slide-2.jpg"/></Link>
          <Link to="/product/3"><img className="slider_images img-responsive" src="img/slide-3.jpg"/></Link>
          <Link to="/gallery"><img className="slider_images img-responsive" src="img/slide-4.jpg"/></Link>
          <Link to="/gallery"><img className="slider_images img-responsive" src="img/slide-5.jpg"/></Link>
          <Link to="/gallery"><img className="slider_images img-responsive" src="img/slide-6.jpg"/></Link>
          <Link to="/product/3"><img className="slider_images img-responsive" src="img/slide-7.jpg"/></Link>
        </div>
    );
  }
}
