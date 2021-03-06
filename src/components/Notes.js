import React, { Component } from "react";
import NoteItem from "./NoteItem";

import { Link } from "react-router-dom";

import Context from "../Context";

class Notes extends Component {
  static contextType = Context;
  render() {
    const { folderid } = this.props.match.params;
    const notes = folderid
      ? this.context.notes.filter((note) => note.folder_id === Number(folderid))
      : this.context.notes;

    return (
      <>
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            match={{ params: { noteid: note.id } }}
            history={this.props.history}
          />
        ))}

        <div className="noteCreate">
          <Link to="/AddNote"> Create Note</Link>
        </div>
      </>
    );
  }
}
export default Notes;
