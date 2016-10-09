import React from 'react';

export default class ProductMock2 extends React.Component {

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
                  <img src="img/EA03.jpg" alt="" className="single-img" width="380" height="373"/>
                </div>
                <div className="col-xs-12 col-sm-8" id="product-detail">
                  <h1 className="product-header-text">“GREAT RUBY OF LUCK” </h1>
                  <p className="product-description">CODE : EA 3</p>
                  <p className="product-description">
                    The silver enamel necklace of great ruby. Ruby means goodluck & infiniity wealth. The necklace is the exotic glamour of genuine silver. The necklace itself & the pendant is the design of “Phikul” (mimusops elengi) asian flower or bukal, asian bullet wood, bullet wood, tanjong tree, medlar, spanish cherry. Folk wisdom believe that “phikul”, this kind of flower’s plant in the garden of heaven. It will bring goodluck to one who have it.
                  </p>
                  <p className="product-description ">
                    It’s design & production is hand made by the artist from sukhothai, the northern province of thailand. The enamel is thai traditional technique of red & blue color. Red of the great ruby & “phikul” flower is the propitious color of the wealth & blue color of design reflects the perfection & firmness.
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
                <img src="img/EA02.jpg" alt="" className="sigle-img" width="380" height="373"/>
                <div className="caption text-center">
                  <p>“Roses of Love”</p>
                  <p>Code : EA 2</p>
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
