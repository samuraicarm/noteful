import React, { Component } from 'react'
import Folders from './Folders';

import './FolderItem.css';

import { Link } from 'react-router-dom'

export class FolderItem extends Component {
    render() {
        return (
            <div >
                {Folders.folders.map(folder => (
                    <div className="folder">
                        <p><Link to={`/folder/${folder.id}`}>{folder.name}</Link></p>
                    </div>
                ))}

            </div >
        )
    }
}

export default FolderItem
