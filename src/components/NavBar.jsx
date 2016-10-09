import React, {PropTypes} from 'react'
import {Link} from 'react-router'

export default class NavBar extends React.Component {

  render() {
    //  style="font-size:30px;cursor:pointer"
    return (
      <header className="pikapok__header container-fluid">
        <div id="mySidenav" className="sidenav visible-xs">
          <a href="#" className="closebtn" onClick={this.closeNav}>&times;</a>
          <Link to="/category/0">EXQUISITE ACCESSORY</Link>
          <Link to="/category/1">ELEGANT HANDBAG</Link>
          <Link to="/">TEXTILE TREASURE</Link>
          <Link to="/category/2">WORK OF ART DECORATION</Link>
          <div className="pikapok-menu__divider"></div>
          <a href="#">Contact Us</a>
          <a href="#">En</a>
          <a href="#">SIGN IN</a>
          <a href="#">CART</a>
        </div>
        {/* will delete later */}
        <Link to="/product/0">p0</Link>
        <Link to="/product/1">p1</Link>
        <Link to="/product/2">p2</Link>
        <Link to="/product/3">p3</Link>
        <Link to="/product/4">p4</Link>
        <Link to="/product/5">p5</Link>
        <Link to="/product/6">p6</Link>
        <Link to="/product/7">p7</Link>
        <Link to="/product/8">p8</Link>
        <Link to="/product/9">p9</Link>
        <Link to="/product/10">p10</Link>

        <div className="row pikapok__navbar-header">
          <span className="visible-xs hidden-sm hidden-md hidden-lg pikapok__hamburger-menu col-xs-2" onClick={this.openNav}>&#9776;</span>
          <div className="pikapok__slogan hidden-xs col-sm-4">
            The way we PICK, We PICK the BEST !!!
          </div>
          <div className="pikapok__logo col-xs-7 col-sm-4">
            <img src="img/logo.png" className="img-responsive"/>
          </div>
          <div className="col-xs-3 col-sm-4 pikapok__menus">
            <a href="#" className="with-divider" target="_blank">CONTACT US</a>
            <a href="#" className="with-divider hidden-xs visible-sm visible-md visible-lg" target="_blank">EN</a>
            <a href="#" className="with-divider" target="_blank">SIGN IN</a>
            <a href="#" target="_blank">CART</a>
          </div>

          <div className="row hidden-xs pikapok__categories">
            <div className="col-sm-12 text-center pikapok__category-all">
              <div className="pikapok__category category-3">
                <Link to="/category/0">EXQUISITE ACCESSORY</Link>
              </div>
              <div className="pikapok__red-dot"></div>
              <div className="pikapok__category category-2">
                <Link to="/category/1">ELEGANT HANDBAG</Link>
              </div>
              <div className="pikapok__red-dot"></div>
              <div className="pikapok__category category-4">
                <Link to="/">TEXTILE TREASURE</Link>
              </div>
              <div className="pikapok__red-dot"></div>
              <div className="pikapok__category category-4">
                <Link to="/category/2">WORK OF ART DECORATION</Link>
              </div>
            </div>
          </div>
          <div className="row"></div>
        </div>
      </header>
    );
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "275px";
    document.getElementById("main").style.marginLeft = "275px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
}
