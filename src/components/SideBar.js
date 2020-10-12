import React, { Component } from 'react';
import FolderItem from './FolderItem';


import './SideBar.css';

import { Link } from 'react-router-dom';

class SideBar extends Component {
    render() {
        return (
            <div>

                <FolderItem />

                <Link to="/CreateFolder"> Create Folder</Link>

            </div>

        )
    }
}

export default SideBar

