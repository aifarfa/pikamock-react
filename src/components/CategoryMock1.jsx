import React from 'react';

export default class CategoryMock1 extends React.Component {

  componentDidMount() {
    // console.log('componentDidMount About')
  }

  render() {
    return (
      <div className="container pikapok__content">

        <div id="pikapok__carousel" className="carousel slide pikapok__carousel" data-ride="carousel">
          <div className="row">
            <div className="col-xs-12">
              <h3 className="categories-header">ELEGANT HANDBAG</h3>
            </div>
          </div>
          <div className="row">
             <div className="col-xs-12 col-sm-4 thumbnail">
                <img src="/img/EH01.jpg" alt="" className="sigle-img" width="380" height="373" />
                <div className="caption text-center">
                  <p>“Angel Of Prosperity”</p>
                  <p>Code : EH 1 /  WAD 1</p>
                  <p>
                    <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                  </p>
                </div>
             </div>

             <div className="col-xs-12 col-sm-4 thumbnail">
                <img src="/img/EH02.jpg" alt="" className="single-img" width="380" height="373" />
                <div className="caption text-center">
                  <p>“Angel Of Passion”</p>
                  <p>Code : EH 2 /  WAD 2</p>
                  <p>
                    <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                  </p>
                </div>
             </div>

             <div className="col-xs-12 col-sm-4 thumbnail">
                <img src="/img/EH03.jpg" alt="" className="single-img" width="380" height="373" />
                <div className="caption text-center">
                  <p>“Bunch Of Glory”</p>
                  <p>Code : EH 3</p>
                  <p>
                    <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                  </p>
                </div>
             </div>

             <div className="col-xs-12 col-sm-4 thumbnail">
                <img src="/img/EH04.jpg" alt="" className="single-img" width="380" height="373" />
                <div className="caption text-center">
                  <p>“Fortune Lover”</p>
                  <p>Code : EH 4</p>
                  <p>
                    <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                  </p>
                </div>
             </div>

             <div className="col-xs-12 col-sm-4 thumbnail">
                <img src="/img/EH05.jpg" alt="" className="single-img" width="380" height="373" />
                <div className="caption text-center">
                  <p>“Forever Rose”</p>
                  <p>Code : EH 5</p>
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
