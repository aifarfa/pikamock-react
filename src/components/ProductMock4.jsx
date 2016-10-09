import React from 'react';

export default class ProductMock4 extends React.Component {

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
                  <img src="/img/EH02.jpg" alt="" className="single-img" width="380" height="373"/>
                </div>
                <div className="col-xs-12 col-sm-8" id="product-detail">
                  <h1 className="product-header-text">“ANGEL OF PASSION”</h1>
                  <p className="product-description">CODE : EH 2 / WAD 2</p>
                  <p className="product-description">
                    The silver niello ware handbag or clutch or decoration art piece. It’s made of silver for the shape and then use silver again to make into the silver niello ware.
                  </p>
                  <p className="product-description ">
                    The design is about the growth of the delicate puffy flower “Phudtan”, (Hibiscus mutabilis) Dixie rosemallow , Cotton rose , Confederate rose, the propitious flower with the bunch of sprig.
                  </p>
                  <p className="product-description ">
                    The hook & pole is decorated with genuine brilliant diamonds and also elaborated the lines of star with genuine diamonds.
                  </p>
                  <p className="product-description ">
                    Star fruit or Star apple or Carambola (Averrhoa carambola) is the auspicious fruit that Asian believe to protect the bad things or evil. Because the cross section of Star fruit appears as the same shape as star.
                  </p>
                  <p className="product-description ">
                    Silver represents Moon means “Passion” meanwhile Diamond represents “Glory” and Star fruit shape will protect all bad things and also represents “Goodluck”.
                  </p>
                  <p className="product-description ">
                    This art piece of handicraft was created & made by Thai artist from Kanchanaburi province, the central part of Thailand.
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
                <img src="/img/EH04.jpg" alt="" className="single-img" width="380" height="373"/>
                <div className="caption text-center">
                  <p>“Fortune Lover”</p>
                  <p>Code : EH 4</p>
                  <br/>
                </div>
              </div>

              <div className="col-xs-12 col-sm-3 thumbnail">
              <img src="/img/EH02.jpg" alt="" className="sigle-img" width="380" height="373"/>
              <div className="caption text-center">
                <p>“Angel of Passion”</p>
                <p>Code : EH 2 /  WAD 2</p>
                <br/>

              </div>
              </div>

              <div className="col-xs-12 col-sm-3 thumbnail">
                <img src="/img/EH05.jpg" alt="" className="single-img" width="380" height="373"/>
                <div className="caption text-center">
                  <p>“Midnight Glow”</p>
                  <p>Code : EH 5</p>
                  <br/></div>
              </div>

              <div className="col-xs-12 col-sm-3 thumbnail">
                <img src="/img/EA03.jpg" alt="" className="single-img" width="380" height="373"/>
                <div className="caption text-center">
                  <p>“Ruby of Luck”</p>
                  <p>Code : EA 3</p>
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
