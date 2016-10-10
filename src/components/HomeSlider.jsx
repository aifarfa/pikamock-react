import React from 'react';

export default class HomeSlider extends React.Component {

  componentDidMount() {
    console.log('HomeSlider - componentDidMount');
    $('.pikapok__slider').slick({infinite: true, autoplay: true});
  }

  render() {
    return (
        <div className="pikapok__slider col-xs-12">
          <img className="slider_images img-responsive" src="img/slide-1.jpg"/>
          <img className="slider_images img-responsive" src="img/slide-2.jpg"/>
          <img className="slider_images img-responsive" src="img/slide-3.jpg"/>
          <img className="slider_images img-responsive" src="img/slide-4.jpg"/>
          <img className="slider_images img-responsive" src="img/slide-5.jpg"/>
          <img className="slider_images img-responsive" src="img/slide-6.jpg"/>
          <img className="slider_images img-responsive" src="img/slide-7.jpg"/>
        </div>
    );
  }
}
