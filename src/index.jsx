import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import {reducers} from './modules'
import App from './components/App'
import About from './components/About'
import Home from './components/Home'
import OrderForm from './components/OrderForm'
import ProductMock0 from './components/ProductMock0.jsx'
import ProductMock1 from './components/ProductMock1.jsx'
import ProductMock2 from './components/ProductMock2.jsx'
import ProductMock3 from './components/ProductMock3.jsx'
import ProductMock4 from './components/ProductMock4.jsx'
import ProductMock5 from './components/ProductMock5.jsx'
import ProductMock6 from './components/ProductMock6.jsx'
import ProductMock7 from './components/ProductMock7.jsx'
import ProductMock8 from './components/ProductMock8.jsx'
import ProductMock9 from './components/ProductMock9.jsx'
import ProductMock10 from './components/ProductMock10.jsx'

import CategoryMock0 from './components/CategoryMock0.jsx'
import CategoryMock1 from './components/CategoryMock1.jsx'
import CategoryMock2 from './components/CategoryMock2.jsx'

import Privacy from './components/Privacy.jsx'
import Contactus from './components/Contactus.jsx'
import Aboutus from './components/Aboutus.jsx'
import Gallery from './components/Gallery.jsx'



// require('./style.scss');
// require('../node_modules/bootstrap/dist/css/bootstrap.css');

const initialState = Immutable.fromJS({routing: {}});

const devToolsExtension = window.devToolsExtension
  ? window.devToolsExtension()
  : f => f;

const middleware = applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory));
const store = createStore(reducers, initialState, compose(middleware, devToolsExtension));

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) {
    return state.get('routing').toJS()
  }
});

const rootComponent = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} path="/">
        <IndexRoute component={Home}/>
        <Route component={OrderForm} path="/order/add/:productId/:itemName"/>
        <Route component={CategoryMock0} path="/category/0"/>
        <Route component={CategoryMock1} path="/category/1"/>
        <Route component={CategoryMock2} path="/category/2"/>
        <Route component={ProductMock0} path="/product/0"/>
        <Route component={ProductMock1} path="/product/1"/>
        <Route component={ProductMock2} path="/product/2"/>
        <Route component={ProductMock3} path="/product/3"/>
        <Route component={ProductMock4} path="/product/4"/>
        <Route component={ProductMock5} path="/product/5"/>
        <Route component={ProductMock6} path="/product/6"/>
        <Route component={ProductMock7} path="/product/7"/>
        <Route component={ProductMock8} path="/product/8"/>
        <Route component={ProductMock9} path="/product/9"/>
        <Route component={ProductMock10} path="/product/10"/>
        <Route component={Privacy} path="/privacy"/>
        <Route component={Contactus} path="/contactus"/>
        <Route component={Aboutus} path="/aboutus"/>
        <Route component={Gallery} path="/gallery"/>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(rootComponent, document.getElementById('app'));
