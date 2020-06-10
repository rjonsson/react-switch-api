import React, { Component } from "react";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loaded: 0,
    };
  }

  onChangeHandler = (event) => {
    console.log(event.target.files[0]);
  };

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    console.log(data);
  };

  render() {
    return (
      <div className="container">
        <form>
          <h3>File upload</h3>
          <div className="custom-file">
            <input
              name="file"
              type="file"
              className="custom-file-input"
              onChange={this.onChangeHandler}
              id="customFile"
            />
            <label className="custom-file-label" htmlFor="customFile">
              Choose file
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-secondary btn-block"
            onClick={this.onClickHandler}
          >
            Upload
          </button>
        </form>
      </div>
    );
  }
}

export default FileUpload;
