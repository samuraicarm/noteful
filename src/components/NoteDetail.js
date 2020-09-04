import React, { Component } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import Context from '../Context';

export default class NoteDetail extends Component {
    static contextType = Context;

    render(props) {
        const selectedNote = this.context.notes.find(note => note.id === props.match.params.noteid);
        return (
            { ...selectedNote.map(note) => (
                <div>
                    <p>{note.name}</p>
                    <p>{note.content} </p>
                </div>

            )
        )
    }
}


