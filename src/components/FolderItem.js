import React, { Component } from 'react'
import Context from '../Context';
import PropTypes from 'prop-types';
import './FolderItem.css';

import { Link } from 'react-router-dom'

export class FolderItem extends Component {
    static contextType = Context;
    render() {
        return (
            <div >
                {this.context.folders.map(folder => (
                    <div key={folder.id} className="folder">
                        <p><Link to={`/folders/${folder.id}`}>{folder.name}</Link></p>
                    </div>
                ))}

            </div >
        )
    }
}


//PropTypes
FolderItem.propTypes = {
    folder: PropTypes.object.isRequired,
};

export default FolderItem
