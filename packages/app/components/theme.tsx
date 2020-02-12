import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { BuiltInCtx, BuiltInProvider } from '../container/buildin';

export const Theme = (props): JSX.Element => {
  const ctx = React.useContext(BuiltInCtx);
  const { children } = props;
  return (
    <BuiltInProvider>
      <ThemeProvider theme={ctx}>
        {children}
      </ThemeProvider>
    </BuiltInProvider>
  )
};
