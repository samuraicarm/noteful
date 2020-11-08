import React, { Component } from "react";
import Context from "../Context";
import ValidationError from "./ValidationError";

export class CreateFolder extends Component {
  static contextType = Context;

  state = {
    name: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.context.addFolder({ folder_name: this.state.name });
    this.setState({ name: "" });
    this.props.history.push("/");
  };

  onAdd = (e) => this.setState({ [e.target.name]: e.target.value });

  validateFolderName() {
    const folderName = this.state.name;
    if (folderName.length === 0) {
      return "folder name is required";
    }
  }

  render() {
    const folderNameError = this.validateFolderName();

    return (
      <form onSubmit={this.onSubmit}>
        <fieldset>
          <legend>Create a Folder</legend>
          <input
            type="text"
            name="name"
            placeholder="Add Folder Name"
            aria-label="Folder Name"
            value={this.state.name}
            onChange={this.onAdd}
          />
          <div>
            {this.state.name && <ValidationError message={folderNameError} />}
          </div>

          <input
            type="submit"
            value="Submit"
            className="btn"
            style={{ flex: "1" }}
            disabled={this.validateFolderName()}
          />
        </fieldset>
      </form>
    );
  }
}

export default CreateFolder;
