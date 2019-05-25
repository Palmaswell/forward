import * as React from 'react';
import Router from 'next/router';
import uuid from 'uuid/v3';
import * as Component from '../components'
import { ColorManagerContext } from '../color';

export interface UploadProps {
  ctx: ColorManagerContext
}

export function Upload(props: UploadProps): JSX.Element {
  const handleChange = (e) => {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const colors = JSON.parse(reader.result as any);
      console.log();
      props.ctx.addElements(colors);
      Router.push({
        pathname: "/list"
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
