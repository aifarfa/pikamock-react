import React from 'react';
import {Link} from 'react-router'
export default class CategoryMock0 extends React.Component {

  componentDidMount() {
    // console.log('componentDidMount About')
  }

  render() {
    return (
      <div className="container pikapok__content">

        <div id="pikapok__carousel" className="carousel slide pikapok__carousel" data-ride="carousel">
          <div className="row">
            <div className="col-xs-12">
              <h3 className="categories-header">EXQUISITE ACCESSORY</h3>
            </div>
          </div>
          <div className="row">
             <div className="col-xs-12 col-sm-4 thumbnail">
              <Link to="/product/0">
                <img src="/img/EA01.jpg" alt="" className="sigle-img" width="380" height="373" />
                </Link>
                <div className="caption text-center">
                  <p>“Roses of Love”</p>
                  <p>Code : EA 1</p>
                  <p>
                    <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                  </p>
                </div>
             </div>

             <div className="col-xs-12 col-sm-4 thumbnail">
                <img src="/img/EA02.jpg" alt="" className="single-img" width="380" height="373" />
                <div className="caption text-center">
                  <p>“Roses of Love”</p>
                  <p>Code : EA 2</p>
                  <p>
                    <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                  </p>
                </div>
             </div>

             <div className="col-xs-12 col-sm-4 thumbnail">
                <img src="/img/EA03.jpg" alt="" className="single-img" width="380" height="373" />
                <div className="caption text-center">
                  <p>“Ruby of Luck”</p>
                  <p>Code : EA 3</p>
                  <p>
                    <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                  </p>
                </div>
             </div>

             <div className="col-xs-12 col-sm-4 thumbnail">
                <img src="/img/EA04.jpg" alt="" className="single-img" width="380" height="373" />
                <div className="caption text-center">
                  <p>“Forever Rose”</p>
                  <p>Code : EA 4</p>
                  <p>
                    <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                  </p>
                </div>
             </div>


             </div>
           </div>
      </div>
    ); // return
  }
}
