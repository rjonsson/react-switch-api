import React, { Component } from "react";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loaded: 0,
      fileContents: "",
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };

  onClickHandler = () => {
    const reader = new FileReader();

    reader.onload = () => {
      this.setState({ fileContents: reader.result });
      const hostArray = this.state.fileContents.toString().split("\n");
      for (let i in hostArray) {
        console.log(hostArray[i]);
      }
    };

    reader.readAsText(this.state.selectedFile);
  };

  render() {
    return (
      <div className="container">
        <h3>File upload</h3>
        <div className="input-group">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              onChange={this.onChangeHandler}
              id="inputfile01"
              accept=".txt"
            />
            <label className="custom-file-label" htmlFor="inputfile01">
              Choose file
            </label>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-secondary btn-block"
            onClick={this.onClickHandler}
          >
            Upload
          </button>
        </div>
      </div>
    );
  }
}

export default FileUpload;
