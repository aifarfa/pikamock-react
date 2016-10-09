import React from 'react'
import Hello from '../../src/components/Hello'
import {expect} from 'chai'
import * as TestUtils from 'react-addons-test-utils'

describe('component: Hello', () => {

  it('render only single .msg', () => {
    const component = TestUtils.renderIntoDocument(<Hello hasPermission={false}/>)
    const elements = TestUtils.scryRenderedDOMComponentsWithClass(component, 'msg')
    expect(elements.length).to.eq(1);
  })

  it('render loader when isLoading: true', () => {
    const fixture = <Hello isLoading={true}/>
    const component = TestUtils.renderIntoDocument(fixture);
    const msg = TestUtils.findRenderedDOMComponentWithClass(component, 'msg');
    // console.log(msg.textContent)
    expect(msg.textContent).to.eq('processing..');
  })

  it('render Hello when isLoading: false', () => {
    const fixture = <Hello isLoading={false}/>
    const component = TestUtils.renderIntoDocument(fixture)
    const msg = TestUtils.findRenderedDOMComponentWithClass(component, 'msg');
    // console.log(msg.textContent);
    expect(msg.textContent).to.eq('Hello, user');
  })

  it('do nothing onClick', () => {
    const component = TestUtils.renderIntoDocument(<Hello hasPermission={false}/>)
    const msg = TestUtils.findRenderedDOMComponentWithTag(component, 'h3')
    // just a random click
    TestUtils.Simulate.click(msg);
    // nothing goes wrong
  })

});
