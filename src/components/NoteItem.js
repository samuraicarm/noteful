import React, { Component } from 'react';
import './NoteItem.css';
import PropTypes from 'prop-types';




export class NoteItem extends Component {
    render() {
        const { id, title, modified } = this.props.note;
        return (
            <div >
                <div className="note">
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {modified}
                    </p>
                    <button className="delete" onClick={this.props.delNote.bind(this, id)}>Delete Note</button>
                </div>





            </div >
        )
    }
}

//PropTypes
NoteItem.propTypes = {
    note: PropTypes.object.isRequired
}

export default NoteItem;
