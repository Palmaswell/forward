import * as React from 'react';
import uuid from 'uuid/v3';
import Cookie from 'js-cookie';

export class Upload extends React.Component {
  public state = {
    file: null
  }

  private handleSelectedFile(e: React.ChangeEvent<HTMLInputElement>): void {
    e.persist();
    this.setState({...this.state, file: e.target.files[0]});
  }

  public componentDidUpdate(): void {
    console.log('!!!!!componentDidUpdate', this.state.file)
    Cookie.set('file', this.state.file);
  }

  public render(): JSX.Element {
    return (
      <>
      <input
        id={uuid('upload', '1b671a64-40d5-491e-99b0-da01ff1f3341')}
        type="file"
        onChange={e => this.handleSelectedFile(e)}
        multiple
        />
      </>
    )
  }
}
