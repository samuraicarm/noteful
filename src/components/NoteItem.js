import React, { Component } from 'react';
import './NoteItem.css';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import { Link } from 'react-router-dom';


import Context from '../Context';

export class NoteItem extends Component {
    static contextType = Context;
    render() {
        const { id, name, modified } = this.context.note;
        return (
            <div className="note">
                <h3>
                    <Link to={`/note/${id}`}>{name}</Link>
                </h3>
                <p>
                    <Moment format="MM/DD/YYYY">
                        {modified}
                    </Moment>
                </p>
                <button className="delete" onClick={this.context.delNote.bind(this, id)}>Delete Note</button>
            </div>
        )
    }
}

//PropTypes
NoteItem.propTypes = {
    note: PropTypes.object.isRequired
}

export default NoteItem;
