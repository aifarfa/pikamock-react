import React from 'react';
import {Link, push} from 'react-router'

export default class ProductMock5 extends React.Component {

  componentDidMount() {
    // console.log('componentDidMount About')
  }

  render() {
    return (
      <div className="container pikapok__content">
        <div id="pikapok__carousel" className="carousel slide pikapok__carousel" data-ride="carousel">

          <div className="product-show">
            <div className="row">
              <div className="col-xs-12">
                <div className="col-xs-12 col-sm-4 thumbnail">
                  <img src="/img/EH03.jpg" alt="" className="single-img" width="380" height="373"/>
                </div>
                <div className="col-xs-12 col-sm-8" id="product-detail">
                  <h1 className="product-header-text">“BUNCH OF GLORY”</h1>
                  <p className="product-description">CODE : EH 3</p>
                  <p className="product-description">
                    The “Bunch of Glory” silver handbag is handmade design for only limited one art piece. It can use to be a handbag or a clutch bag with 2 length of belt. The belt was handmade by the silver thread knit together. The bag itself is airy with tiny perforated design.
                  </p>
                  <p className="product-description ">
                    The design is the bunch of sprigs that reflects the sign of  “Growth & Glory”.
                  </p>
                  <p className="product-description ">
                    The artist of this handicraft is the local artist stayed in Nan province, the northern part of Thailand.
                  </p>
                  <p className="product-description product-price">USD. 9999.99</p>
                  <p>
                    <a href="#" className="btn btn-info" role="button">PICK TO CART</a>
                  </p>
                  <p className="product-description">Shares:
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="separate-content"/>

          <div id="suggested-product">
            <div className="row">
              <div className="col-xs-12">
                <h3 id="suggested-product-header">EXPLORE & PICK</h3>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-3 thumbnail">
                <Link to="/product/3">
                  <img src="/img/EH01.jpg" alt="" className="single-img" width="380" height="373"/>
                  <div className="caption text-center">
                    <p>“Angel Of Prosperity”</p>
                    <p>Code : EH 1 /  WAD 1</p>
                    <br/>
                  </div>
                </Link>
              </div>

              <div className="col-xs-12 col-sm-3 thumbnail">
                <Link to="/product/6">
                  <img src="/img/EH04.jpg" alt="" className="single-img" width="380" height="373"/>
                  <div className="caption text-center">
                    <p>“Fortune Lover”</p>
                    <p>Code : EH 4</p>
                    <br/>
                  </div>
                </Link>
              </div>

              <div className="col-xs-12 col-sm-3 thumbnail">
                <Link to="/product/4">
                  <img src="/img/EH02.jpg" alt="" className="sigle-img" width="380" height="373"/>
                  <div className="caption text-center">
                    <p>“Angel of Passion”</p>
                    <p>Code : EH 2 /  WAD 2</p>
                    <br/>
                  </div>
                </Link>
              </div>

              <div className="col-xs-12 col-sm-3 thumbnail">
                <Link to="/product/7">
                  <img src="/img/EH05.jpg" alt="" className="single-img" width="380" height="373"/>
                  <div className="caption text-center">
                    <p>“Midnight Glow”</p>
                    <p>Code : EH 5</p>
                    <br/></div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    ); // return
  }
}
