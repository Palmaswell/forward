import * as React from 'react';
import { render } from 'react-testing-library';
import { Button, FileButton, ButtonTypes } from './button';
import { Theme } from './theme';

describe('Button component', () => {
  test('Renders a HTMLButton', () => {
    const {getByTestId} = render(
      <Theme>
        <Button
          copy="highly polished button"
          testId="button"
          />
      </Theme>
    );
    expect(getByTestId('button').tagName).toBe('BUTTON')
  });
  test('Renders a HTMLInput file styled as a button', () => {
    const acceptedFiles = '.json, application/json';
    const { getByTestId, getByText } = render(
      <Theme>
        <FileButton
          accept={acceptedFiles}
          type={ButtonTypes.file}
          copy="polished button"
          testId="buttonfile"
          onChange={() => console.log('on change test')} />
      </Theme>
    );
    const input = getByTestId('buttonfile');
    const label = getByText('polished button');
    expect(input.getAttribute('accept')).toBe(acceptedFiles);
    expect(input.getAttribute('type')).toBe('file');
    expect(/[0-9a-z]/g.test(label.getAttribute('for'))).toBe(true);
    expect(parseInt(getComputedStyle(input).width.match(/[0-9]+/g)[0])).toBe(1)
    expect(parseInt(getComputedStyle(input).height.match(/[0-9]+/g)[0])).toBe(1)
  })

});
