import React from 'react';
import {Link} from 'react-router'
export default class Gallery extends React.Component {

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
                  <Link to="/product/0">
                    <p>
                      <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                    </p>
                  </Link>
                </div>
             </div>

             <div className="col-xs-12 col-sm-4 thumbnail">
                <Link to="/product/1">
                  <img src="/img/EA02.jpg" alt="" className="single-img" width="380" height="373" />
                </Link>
                <div className="caption text-center">
                  <p>“Roses of Love”</p>
                  <p>Code : EA 2</p>
                  <Link to="/product/1">
                  <p><a href="#" className="btn btn-info" role="button">PICK NOW</a></p>
                  </Link>
                </div>
             </div>

             <div className="col-xs-12 col-sm-4 thumbnail">
                <Link to="/product/2">
                  <img src="/img/EA03.jpg" alt="" className="single-img" width="380" height="373" />
                </Link>
                <div className="caption text-center">
                  <p>“Ruby of Luck”</p>
                  <p>Code : EA 3</p>
                  <p><Link to="/product/2">
                    <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                    </Link>
                  </p>
                </div>
             </div>

             <div className="col-xs-12 col-sm-4 thumbnail">
                <img src="/img/EA04.jpg" alt="" className="single-img" width="380" height="373" />
                <div className="caption text-center">
                  <p>“Forever Rose”</p>
                <p>Code : EA 4</p>
                  <Link to="/product/2">
                  <p>
                    <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                  </p>
                  </Link>
                </div>
             </div>
             </div>








             <div className="row">
               <div className="col-xs-12">
                 <h3 className="categories-header">ELEGANT HANDBAG</h3>
               </div>
             </div>
             <div className="row">
                <div className="col-xs-12 col-sm-4 thumbnail">
                   <Link to="/product/3">
                   <img src="/img/EH01.jpg" alt="" className="sigle-img" width="380" height="373" />
                   </Link>
                   <div className="caption text-center">
                     <p>“Angel Of Prosperity”</p>
                     <p>Code : EH 1 /  WAD 1</p>
                     <Link to="/product/3">
                       <p>
                         <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                       </p>
                     </Link>
                   </div>
                </div>

                <div className="col-xs-12 col-sm-4 thumbnail">
                   <Link to="/product/4">
                     <img src="/img/EH02.jpg" alt="" className="single-img" width="380" height="373" />
                   </Link>
                   <div className="caption text-center">
                     <p>“Angel Of Passion”</p>
                     <p>Code : EH 2 /  WAD 2</p>
                     <Link to="/product/4">
                       <p>
                         <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                       </p>
                     </Link>
                   </div>
                </div>

                <div className="col-xs-12 col-sm-4 thumbnail">
                   <Link to="/product/5">
                     <img src="/img/EH03.jpg" alt="" className="single-img" width="380" height="373" />
                   </Link>
                   <div className="caption text-center">
                     <p>“Bunch Of Glory”</p>
                     <p>Code : EH 3</p>
                     <Link to="/product/5">
                       <p>
                         <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                       </p>
                     </Link>
                   </div>
                </div>

                <div className="col-xs-12 col-sm-4 thumbnail">
                   <Link to="/product/6">
                     <img src="/img/EH04.jpg" alt="" className="single-img" width="380" height="373" />
                   </Link>
                   <div className="caption text-center">
                     <p>“Fortune Lover”</p>
                     <p>Code : EH 4</p>
                     <Link to="/product/6">
                       <p>
                         <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                       </p>
                     </Link>
                   </div>
                </div>

                <div className="col-xs-12 col-sm-4 thumbnail">
                   <Link to="/product/7">
                     <img src="/img/EH05.jpg" alt="" className="single-img" width="380" height="373" />
                   </Link>
                   <div className="caption text-center">
                     <p>“Forever Rose”</p>
                     <p>Code : EH 5</p>
                     <Link to="/product/7">
                       <p>
                         <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                       </p>
                     </Link>
                   </div>
                </div>
                </div>








                <div className='row'>
                  <div className='col-xs-12'>
                    <h3 className='categories-header'>WORK OF ART DECORATION</h3>
                  </div>
                </div>
                <div className='row'>
                   <div className="col-xs-12 col-sm-4 thumbnail">
                      <Link to="/product/8">
                        <img src="/img/WAD01.jpg" alt="" className="sigle-img" width="380" height="373" />
                      </Link>
                      <div className="caption text-center">
                        <p>“Angel Of Prosperity”</p>
                        <p>Code : EH 1 /  WAD 1</p>
                        <Link to="/product/8">
                          <p>
                            <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                          </p>
                        </Link>
                      </div>
                   </div>

                   <div className="col-xs-12 col-sm-4 thumbnail">
                      <Link to="/product/9">
                        <img src="/img/WAD02.jpg" alt="" className="single-img" width="380" height="373" />
                      </Link>
                      <div className="caption text-center">
                        <p>“Angel Of Passion”</p>
                        <p>Code : EH 2 /  WAD 2</p>
                        <Link to="/product/9">
                          <p>
                            <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                          </p>
                        </Link>
                      </div>
                   </div>

                   <div className="col-xs-12 col-sm-4 thumbnail">
                      <img src="/img/WAD03.jpg" alt="" className="single-img" width="380" height="373" />
                      <div className="caption text-center">
                        <p>“Golden Bouquet" Chandelier</p>
                        <p>Code : WAD 3</p>
                        <p>
                          <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                        </p>
                      </div>
                   </div>

                   <div className="col-xs-12 col-sm-4 thumbnail">
                      <img src="/img/WAD04.jpg" alt="" className="single-img" width="380" height="373" />
                      <div className="caption text-center">
                        <p>“Golden Blossom”</p>
                        <p>Code : WAD 4</p>
                        <p>
                          <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                        </p>
                      </div>
                   </div>

                   <div className="col-xs-12 col-sm-4 thumbnail">
                      <img src="/img/WAD05.jpg" alt="" className="single-img" width="380" height="373" />
                      <div className="caption text-center">
                        <p>“Golden Blossom”</p>
                        <p>Code : WAD 5</p>
                        <p>
                          <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                        </p>
                      </div>
                   </div>

                   <div className="col-xs-12 col-sm-4 thumbnail">
                      <Link to="/product/10">
                        <img src="/img/WAD06.jpg" alt="" className="single-img" width="380" height="373" />
                      </Link>
                      <div className="caption text-center">
                        <p>“Guardian Lion & Lioness”</p>
                        <p>Code : WAD 6</p>
                        <Link to="/product/10">
                          <p>
                            <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                          </p>
                        </Link>
                      </div>
                   </div>

                   <div className="col-xs-12 col-sm-4 thumbnail">
                      <img src="/img/WAD07.jpg" alt="" className="single-img" width="380" height="373" />
                      <div className="caption text-center">
                        <p>“Glorious Deva”</p>
                        <p>Code : WAD 7</p>
                        <p>
                          <a href="#" className="btn btn-info" role="button">PICK NOW</a>
                        </p>
                      </div>
                   </div>

                   <div className="col-xs-12 col-sm-4 thumbnail">
                      <img src="/img/WAD08.jpg" alt="" className="single-img" width="380" height="373" />
                      <div className="caption text-center">
                        <p>“Little Family”</p>
                        <p>Code : WAD 7</p>
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
