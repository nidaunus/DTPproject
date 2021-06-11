import React from 'react';
import HttpService from './HttpService'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      selectedFile: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.changeHandlerFiles = this.changeHandlerFiles.bind(this);
  }

  //get
    onList() {
     HttpService.getJson();
  } 

  onListAsync() {
    HttpService.getAsync()
  }

  //post

  async onPostJson() {
    const data = { name: "adım", surname: "soyadım", age: 20 }
    await HttpService.postJson(data, data)
  }

  onPostJsonAsync() {
    const data = { name: "adım", surname: "soyadım", age: 20 }
    HttpService.postAsync(data, data)
  }

  async onPostForm() {
    const data = { name: "adım", surname: "soyadım", age: 20 }
    await HttpService.postForm(data, data);
  }

  onPostFormAsync() {
    const data = { name: "adım", surname: "soyadım", age: 20 }
    HttpService.postFormAsync(data, data);
  }

  //uploadfile
  changeHandler(event) {
    this.setState({
      selectedFile: event.target.files[0],
    })

  }
  async uploadFile() {
    await HttpService.uploadFile(this.state.selectedFile);
  }

  uploadFileAsync() {
    HttpService.uploadFileAsync(this.state.selectedFile);
  }

  //uploadFiles
  changeHandlerFiles(event) {
    this.setState({
      selectedFile: event.target.files,
    })
  }

  /*  uploadFiles() {
     const selectedFiles = this.state.selectedFile;
     for (let i = 0; i < selectedFiles.length; i++) {
       HttpService.fileUpload(selectedFiles[i]);
     }
   } */

  uploadFiles() {
    const selectedFiles = this.state.selectedFile;
    HttpService.uploadFiles(selectedFiles);
  }

  uploadFilesAsync() {
    const selectedFiles = this.state.selectedFile;
    HttpService.uploadFilesAsync(selectedFiles);
  }

  render() {
    return (
      <div>
        <button onClick={this.onList}>sync get</button> <br /> <br />

        <button onClick={this.onListAsync}>async get</button> <br /> <br />

        <button onClick={this.onPostJson}>sync postJson</button> <br /> <br />

        <button onClick={this.onPostJsonAsync}>async postJson</button> <br /> <br />

        <button onClick={this.onPostForm}>sync postForm</button> <br /> <br />

        <button onClick={this.onPostFormAsync}>async postForm</button> <br /> <br />

        <input type="file" name="file" onChange={this.changeHandler} />
        <div>
          <button onClick={() => this.uploadFile()}>sync file upload</button>
        </div> <br /> <br />

        <input type="file" name="file" onChange={this.changeHandler} />
        <div>
          <button onClick={() => this.uploadFileAsync()}>async file upload</button>
        </div> <br /> <br />

        <input type="file" name="file" multiple onChange={this.changeHandlerFiles} />
        <div>
          <button onClick={() => this.uploadFiles()}>multiple file upload</button>
        </div> <br /> <br />

        <input type="file" name="file" multiple onChange={this.changeHandlerFiles} />
        <div>
          <button onClick={() => this.uploadFilesAsync()}>async multiple file upload</button>
        </div>
      </div>
    )
  }
}

export default App;
