import React, { Component } from 'react';
import FolderItem from './FolderItem';
import CreateFolder from './CreateFolder';
import './SideBar.css';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    render() {
        return (
            <div>

                <FolderItem />

                <div className="boxFolder">
                    <Link to="CreateFolder"> Create Folder</Link>
                </div>

            </div>

        )
    }
}

export default SideBar

