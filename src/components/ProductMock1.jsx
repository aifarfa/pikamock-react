import React from 'react';

export default class ProductMock1 extends React.Component {

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
                  <img src="img/categories-002.png" alt="" className="single-img" width="380" height="373"/>
                </div>
                <div className="col-xs-12 col-sm-8" id="product-detail">
                  <h1 className="product-header-text">BUNCH OF GLORY</h1>
                  <p className="product-description">CODE : EH 3</p>
                  <p className="product-description">
                    The handmade silver handbag or clutch with 2 length of belt. The design is the bunch of sprig that reflects the sign of glory.</p>
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
                <h3 id="suggested-product-header">CUSTOMERS ALSO LOVE</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-3 thumbnail">
                <img src="img/categories-001.png" alt="" className="sigle-img" width="380" height="373"/>
                <div className="caption text-center">
                  <p>“Angel of Prosperity”</p>
                  <p>Gold Niello Handbag</p>
                  <p>USD 9999.99</p>
                  <br/>

                </div>
              </div>

              <div className="col-xs-12 col-sm-3 thumbnail">
                <img src="img/categories-002.png" alt="" className="single-img" width="380" height="373"/>
                <div className="caption text-center">
                  <p>“Fortune Lover”</p>
                  <p>Handbag & Clutch</p>
                  <p>USD 9999.99</p>
                  <br/>
                </div>
              </div>

              <div className="col-xs-12 col-sm-3 thumbnail">
                <img src="img/categories-003.png" alt="" className="single-img" width="380" height="373"/>
                <div className="caption text-center">
                  <p>“Angel of Passion””</p>
                  <p>Silver Niello Handbag</p>
                  <p>USD 9999.99</p>
                  <br/></div>
              </div>

              <div className="col-xs-12 col-sm-3 thumbnail">
                <img src="img/categories-004.png" alt="" className="single-img" width="380" height="373"/>
                <div className="caption text-center">
                  <p>“Midnight Glow”</p>
                  <p>Handbag</p>
                  <p>USD 9999.99</p>
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); // return
  }
}
