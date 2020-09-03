import React, { Component } from 'react';
import './NoteItem.css';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import { Link } from 'react-router-dom';


import Context from '../Context';

export class NoteItem extends Component {

    static contextType = Context;
    render() {
        return (

            <div>
                {this.context.notes.map(note => (
                    <div key={note.id} className="note">
                        <h3><Link to={`/notes/${note.id}`}>{note.name}</Link></h3>
                        <Moment format="MM/DD/YYYY">{note.modified}</Moment>


                        <button className="delete" onClick={() => {
                            this.context.delNote(note.id);
                            this.props.history.push('/');
                        }}>Delete Note</button>
                    </div>
                ))}
            </div>

        )
    }
}

//PropTypes
NoteItem.propTypes = {
    note: PropTypes.object.isRequired
}

export default NoteItem;
