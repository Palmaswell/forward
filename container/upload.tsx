import * as React from 'react';
import uuid from 'uuid/v3';

export class Upload extends React.Component {
  public state = {
    file: null
  }

  private handleSelectedFile (e: React.ChangeEvent<HTMLInputElement>): void {
    e.persist();
    this.setState({...this.state, file: e.target.files[0]})
    console.log(e.target.files[0], 'see what is inhere');
  }
  public render(): JSX.Element {
    return (
      <input
        id={uuid('upload', '1b671a64-40d5-491e-99b0-da01ff1f3341')}
        type="file"
        onChange={e => this.handleSelectedFile(e)}
        />
    )
  }
}
