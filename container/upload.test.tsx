import * as React from 'react';
import { mount } from 'enzyme';
import * as Container from './';

test('Check elements and attributes', () => {
	const Upload = mount(<Container.Upload />);
  expect(Upload.getDOMNode().tagName).toBe('INPUT');
  expect(Upload.getDOMNode().getAttribute('type')).toBe('file')
  expect(Upload.getDOMNode().getAttribute('accept')).toBe('.json')
});
