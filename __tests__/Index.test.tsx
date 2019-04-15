import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import Index from '../pages/Index';

describe('Index', () => {
  it('should create instance', () => {
    const component = TestRenderer.create(<Index />); // React.createElement('Index', null, null)
    expect(component.toJSON()).toMatchSnapshot();
  });
});
