import * as React from 'react';
import Cookie from 'js-cookie';
import Router from 'next/router';
import uuid from 'uuid/v3';
import { ColorManagerContext, palette } from '../color';
import * as Component from '../components';

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
      <Component.FileButton
        accept=".json, application/json"
        copy="Upload colors"
        type={Component.ButtonTypes.file}
        onChange={e => handleChange(e)}
        />
    </>
  )
}
