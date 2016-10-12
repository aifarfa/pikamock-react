import React from 'react'
import {Link} from 'react-router'

export default class Footer extends React.Component {

  render() {
    return (
      <footer className="row pikapok__footer">
        <div className="col-sm-3 col-xs-12 footer-payment">
          <p className="footer-column-header page__bold-text">Payment methods</p>
          <div className="footer-payment-icon">
            <img src="/img/icon-paypal.png"/>
            <img src="/img/icon-visa.png"/>
            <img src="/img/icon-mastercard.png"/>
            <img src="/img/icon-american-express.png"/>
            <img src="/img/icon-jcb.png"/>
          </div>
        </div>

        <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-push-1 footer-service">
          <div className="footer-column-header page__bold-text">Services</div>
          <div className="footer-column-menu page__regular-text">Policy</div>
          <div className="footer-column-menu">Newsletter</div>
        </div>

        <div className="col-sm-2 col-xs-10 col-xs-offset-1 footer-about">
          <div className="footer-column-header page__bold-text">About</div>
          <div className="footer-column-menu page__regular-text">
            <Link to="/aboutus">About Us</Link>
          </div>
          <div className="footer-column-menu page__regular-text">
            <Link to="/gallery">Gallery</Link>
          </div>
          <div className="footer-column-menu page__regular-text">
            <Link to="/contactus">Contact Us</Link>
          </div>
        </div>

        <div className="col-xs-10 col-xs-offset-1 col-sm-3 footer-social">
          <img className="footer-social-logo" src="/img/logo.png"/>

          <div className="footer-social-icons">

            <a href="https://www.facebook.com/OfficialPikAPok/">
              <img className="social-icon-facebook" src="/img/footer-icon-fb.png"/>
            </a>
            <a href="https://www.instagram.com/pikapok_thailand/">
              <img className="social-icon-twitter" src="/img/footer-icon-ig.png"/>
            </a>
          </div>
        </div>
        <div className="col-xs-10 col-xs-offset-1 col-sm-3 DHL form">
          <div className="form-group">
            <span>
              Distribution
            </span>
            <img src="img/dhl_logo.jpg" alt=""/>
            <input type="password" className="form-control" id="hdl_tracking" placeholder="Tracking Number"/>
          </div>
          <button type="button" className="btn btn-danger">{'Track'}</button>
        </div>
      </footer>
    );
  }
}
