import React from 'react';

export default class Contactus extends React.Component {

  componentDidMount() {
    // console.log('componentDidMount About')
  }

  render() {
    return (
      <div className="container pikapok__content policy">
        <div ClassName="row">
          <h1 id="header_static">Contact us :</h1>
          <h2 id="subheader_static">Thank you for visiting PikaPok & wish you are delightful.</h2>
          <h3>We want to know your opinions. If you wish to contact us, send an e-mail ;
              E-mail : official@pikapok.com
          </h3>
          <h3>
          or send a letter of your suggestion to :<br></br>
          “PikaPok” CEO
          </h3>
          <h3>
          WGL Co., Ltd. <br></br>
          339/11 Sukhumvit 55 (Tonglor 21) <br></br>
          Wattana District, Bangkok 10110 Thailand <br></br>
          </h3>
        </div>

      </div>
    ); // return
  }
}
