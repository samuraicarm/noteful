import React, { Component } from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Context from '../Context';

class Notes extends Component {
    static contextType = Context;
    render() {
        return (
            <>
                {this.context.notes.map(note => <NoteItem
                    note={note}
                    delNote={this.context.delNote} />)}


                < div className="noteCreate" >
                    <Link to="AddNote"> Create Note</Link>
                </div >
            </>
        )

    }

}



//PropTypes
Notes.propTypes = {
    notes: PropTypes.array.isRequired
}

export default Notes;
