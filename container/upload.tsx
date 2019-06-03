import * as React from 'react';
import Cookie from 'js-cookie';
import Router from 'next/router';
import uuid from 'uuid/v3';
import { ColorManagerContext, palette } from '../color';

export interface UploadProps {
  ctx: ColorManagerContext
}

export function Upload(props: UploadProps): JSX.Element {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const colors = JSON.parse(reader.result as any);
      props.ctx.addElements(colors);
      Cookie.set('colors', palette);
      Router.push({
        pathname: '/list'
      });
    }

    reader.readAsText(file);
  }
  return (
    <>
      <input
        accept=".json, application/json"
        value="Upload colors"
        id={uuid('upload', '1b671a64-40d5-491e-99b0-da01ff1f3341')}
        type="file"
        multiple
        onChange={e => handleChange(e)}
        />
    </>
  )
}
