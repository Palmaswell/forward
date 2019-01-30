import * as React from 'react';
import uuid from 'uuid/v3';
import axios from 'axios';

export interface UploadState {
  file: null | FormData;
}

export class Upload extends React.Component {
  public state = {
    file: null
  }

  private handleSelectedFile(e: React.ChangeEvent<HTMLInputElement>): void {
    e.persist();
    this.setState({...this.state, file: e.target.files[0]});
  }

  public componentDidUpdate(): void {
    const data = new FormData();
    data.append('file', this.state.file);

    if (this.state.file) {
      console.log(this.state.file, 'see what is inhere');
      axios.post('/', data)
      .then(res => {
        console.log(res)
      })
    }
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
