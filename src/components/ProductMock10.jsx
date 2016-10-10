import React from 'react';
import {Link, push} from 'react-router'

export default class ProductMock10 extends React.Component {

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
                  <img src="/img/WAD06.jpg" alt="" className="single-img" width="380" height="373"/>
                </div>
                <div className="col-xs-12 col-sm-8" id="product-detail">
                  <h1 className="product-header-text">“Guardian Lion & Lioness”</h1>
                  <p className="product-description">CODE : WAD 1 / 1EH 1</p>
                  <p className="product-description">
                    The high porcelain of Guardian Lion & Lioness. It was duplicated from the ancient great city of Thailand, Sukhothai, the city of happiness. Formerly, the genuine Guardian Lion & Lioness used to stand & protect in front of the entrance of the royal palace. The artist duplicate from the old painting of it.
                  </p>
                  <p className="product-description ">
                    This high porcelain of Guardian Lion & Lioness was created & designed & molded in two shades of color, dark tan & light earthtone. This handmade porcelain was made by the local artist from Sukhothai province, the northern part of Thailand.                  </p>
                  <p className="product-description product-price">USD. 9999.99</p>
                  <p>
                    <Link to="/order/add/10/Guardian Lion & Lioness" className="btn btn-info">PICK TO CART</Link>
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
                <img src="/img/WAD03.jpg" alt="" className="single-img" width="380" height="373"/>
                <div className="caption text-center">
                  <p>“Golden Bouquet” Chandelier</p>
                  <p>Code : WAD 3</p>
                  <br/>
                </div>
              </div>

              <div className="col-xs-12 col-sm-3 thumbnail">
              <img src="/img/WAD04.jpg" alt="" className="single-img" width="380" height="373"/>
              <div className="caption text-center">
                <p>“Golden Blossom”</p>
                <p>Code : WAD 4</p>
                <br/>
              </div>
              </div>

              <div className="col-xs-12 col-sm-3 thumbnail">
                <img src="/img/WAD07.jpg" alt="" className="single-img" width="380" height="373"/>
                <div className="caption text-center">
                  <p>“Glorious Deva”</p>
                  <p>Code : WAD 7</p>
                  <br/></div>
              </div>

              <div className="col-xs-12 col-sm-3 thumbnail">
                <img src="/img/WAD08.jpg" alt="" className="sigle-img" width="380" height="373"/>
                <div className="caption text-center">
                  <p>“Little Family”</p>
                  <p>Code : WAD 8</p>
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
