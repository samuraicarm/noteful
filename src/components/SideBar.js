import React, { Component } from 'react';
import FolderItem from './FolderItem';
import CreateFolder from './CreateFolder';
import './SideBar.css';



class SideBar extends Component {
    render() {
        return (
            <div>

                <FolderItem />

                <div className="boxFolder">
                    <CreateFolder />
                </div>

            </div>

        )
    }
}

export default SideBar

