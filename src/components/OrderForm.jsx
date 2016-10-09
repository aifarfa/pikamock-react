import React from 'react';

export default class OrderForm extends React.Component {

  componentDidMount() {}

  render() {
    let productId = this.props.params.productId
    let itemName = this.props.params.itemName
    console.log("ordering productId", productId, itemName)

    return (
      <div>
        <div className="form-horizontal col-xs-12 cols" role="form">
          <p>Thanks you for your supports !!!</p>
          <p>Product: {productId}</p>

          <div className="form-group row">
            <label className="col-sm-2 control-label">Product :</label>
            <div className="col-sm-8">
              <p className="form-control-static">{productId} - {itemName}</p>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 control-label">Email *</label>
            <div className="col-sm-4">
              <input type="email" className="form-control" placeholder="Enter your email"/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 control-label">Gender *</label>
            <div className="col-sm-4 radio">
              <label className="radio-inline">
                <input type="radio" name="gender" value="male"/>
                <span>Male</span>
              </label>
              <label className="radio-inline">
                <input type="radio" name="gender" value="female"/>
                <span>Female</span>
              </label>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 control-label">Country *</label>
            <div className="col-sm-4">
              <select className="form-control">
                <option>Thailand</option>
                <option>United State</option>
                <option>Other</option>
              </select>
              {/* <input type="text" className="form-control" placeholder="Please enter your country"/> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
OrderForm.propTypes = {
  params: React.PropTypes.object.isRequired
}
