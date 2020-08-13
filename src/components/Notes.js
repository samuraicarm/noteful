import React, { Component } from 'react';
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

class Notes extends Component {
    render() {
        return this.props.notes.map((note, modified) => (
            <React.Fragment>
                <NoteItem
                    key={note.id}
                    note={note}
                    modified={modified}
                    delNote={this.props.delNote} />
            </React.Fragment>
        ));

    }

}



//PropTypes
Notes.propTypes = {
    notes: PropTypes.array.isRequired
}

export default Notes;
