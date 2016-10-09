import React from 'react';

export default class ProductMock0 extends React.Component {

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
                  <img src="img/EA01.jpg" alt="" className="single-img" width="380" height="373"/>
                </div>
                <div className="col-xs-12 col-sm-8" id="product-detail">
                  <h1 className="product-header-text">“ROSES OF LOVE”</h1>
                  <p className="product-description">CODE : EA 1</p>
                  <p className="product-description">
                    The silver necklace of roses. Generally, rose represents love and it’s design reflect the meaning of love forever. Besides, the bunch of vine delicately connect roses together as to relate love to love to eternity. This necklace is made of genuine silver.
                  </p>
                  <p className="product-description">
                    This genuine silver neclace is hand made by the artist from Nan, the Northern province of Thailand.
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
                <img src="img/EA03.jpg" alt="" className="sigle-img" width="380" height="373"/>
                <div className="caption text-center">
                  <p>“Ruby of Luck”</p>
                  <p>Code : EA 3</p>
                  <br/>

                </div>
              </div>

              <div className="col-xs-12 col-sm-3 thumbnail">
                <img src="img/EA04.jpg" alt="" className="single-img" width="380" height="373"/>
                <div className="caption text-center">
                  <p>“Forever Rose”</p>
                  <p>Code : EA 4</p>
                  <br/>
                </div>
              </div>

              <div className="col-xs-12 col-sm-3 thumbnail">
                <img src="img/WAD02.jpg" alt="" className="single-img" width="380" height="373"/>
                <div className="caption text-center">
                  <p>“Angel of Passion”</p>
                  <p>Code : EH 2 /  WAD 2</p>
                  <br/></div>
              </div>

              <div className="col-xs-12 col-sm-3 thumbnail">
                <img src="img/EH05.jpg" alt="" className="single-img" width="380" height="373"/>
                <div className="caption text-center">
                  <p>“Midnight Glow”</p>
                  <p>Code : EH 5</p>
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
