import React, { Component } from 'react'
import Folders from './Folders';
import './FolderItem.css';

export class FolderItem extends Component {
    render() {
        return (
            <div >
                <div className="folder">
                    <p>  {Folders.folders[0].name}</p>
                </div>
                <div className="folder">
                    <p> {Folders.folders[1].name}</p>
                </div>
                <div className="folder">
                    <p> {Folders.folders[2].name}</p>
                </div>

            </div >
        )
    }
}

export default FolderItem
