import * as React from 'react';
import uuid from 'uuid/v3';
// import Cookie from 'js-cookie';

export const Upload: React.SFC = (): JSX.Element => {
  return (
    <>
      <input
        accept=".json"
        id={uuid('upload', '1b671a64-40d5-491e-99b0-da01ff1f3341')}
        type="file"
        multiple
        />
    </>
  )
}
