import React from 'react';
import {Link, push} from 'react-router'

export default class ProductMock7 extends React.Component {

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
                  <img src="/img/EH05.jpg" alt="" className="single-img" width="380" height="373"/>
                </div>
                <div className="col-xs-12 col-sm-8" id="product-detail">
                  <h1 className="product-header-text">“MIDNIGHT GLOW”</h1>
                  <p className="product-description">CODE : EH 5</p>
                  <p className="product-description">
                    The handmade handbag or clutch bag made from the natural “Lipao” grass, Climbing ferns , String ferns , Comb fern or Curly-grass family (Lygodium , Schizaea). This kind of handbag is the classical Thai traditional handicraft that use to be seen as the appliance for the royal family and the noble family. Nowadays, local Thai artist can develop & produce to be the unique & remarkable form of handbag or clutch bag.
                  </p><br></br>
                  <p className="product-description ">
                    This handicraft “Lipao” handbag comes along with the  genuine silver niello ware on the top, hook, base, handle. The plain black color of “Lipao” grass represents the “Stability & Firmness”.
                  </p><br></br>
                  <p className="product-description ">
                    The artist who created & weaved into bag stays in Nakonsithammarat province, the southern part of Thailand.
                  </p>
                  <p className="product-description product-price">USD. 9999.99</p>
                  <p>
                    <Link to="/order/add/7/MIDNIGHT GLOW" className="btn btn-info">PICK TO CART</Link>
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
                <Link to="/product/7">
                  <img src="/img/EH05.jpg" alt="" className="single-img" width="380" height="373"/>
                  <div className="caption text-center">
                    <p>“Midnight Glow”</p>
                    <p>Code : EH 5</p>
                    <br/></div>
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
                <Link to="/product/5">
                  <img src="/img/EH03.jpg" alt="" className="sigle-img" width="380" height="373"/>
                  <div className="caption text-center">
                    <p>“Bunch of Glory”</p>
                    <p>Code : EH 3</p>
                    <br/>
                  </div>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    ); // return
  }
}
