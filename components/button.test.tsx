import * as React from 'react';
import { render } from 'react-testing-library';
import { Button, FileButton, ButtonTypes } from './button';
import { Theme } from './theme';

describe('Button component', () => {
  test('Renders a HTMLButton', () => {
    const {getByText} = render(
      <Theme>
        <Button value="test button" />
      </Theme>
    );
    expect(getByText('test button').tagName).toBe('BUTTON')
  });
  test('Renders a HTMLInput file styled as a button', () => {
    const { getByTestId } = render(
      <Theme>
        <FileButton
          accept=".json, application/json"
          type={ButtonTypes.file}
          value="test button"
          onChange={() => console.log('on change test')} />
      </Theme>
    );
  })

});
