import React from 'react';
import TestRenderer from 'react-test-renderer';
import Index from '../pages/Index';

describe('Index', () => {
  it('should create instance', () => {
    const component = TestRenderer.create(<Index />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
