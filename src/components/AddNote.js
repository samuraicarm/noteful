import React, { Component } from 'react'
import Context from '../Context';
import ValidationError from './ValidationError';

export class AddNote extends Component {

    static contextType = Context;

    state = {
        name: '',
        content: '',
        folderId: '',
        modified: new Date()
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.context.addNote(this.state);
        this.setState({ name: '', content: '', folderId: '' });
        this.props.history.push('/')
    }

    onAdd = (e) => this.setState({ [e.target.name]: e.target.value });

    validateName() {
        const name = this.state.name;
        if (name.length === 0) {
            return 'Name is required';
        }
    }

    validateContent() {
        const content = this.state.content;
        if (content.length === 0) {
            return 'Content is required';
        }
    }

    validateFolder() {
        const folderId = this.state.folderId;
        if (folderId.value === true) {
            return 'Folder is required';
        }
    }


    render() {
        const nameError = this.validateName();
        const contentError = this.validateContent();
        const folderError = this.validateFolder();
        return (

            <form onSubmit={this.onSubmit} >
                <fieldset>
                    <legend>Create a note</legend>
                    <input
                        type="text"
                        name="name"
                        placeholder="Note Name"
                        aria-label="Note Name"
                        value={this.state.name}
                        onChange={this.onAdd}
                    />
                    <div>
                        {this.state.name && (<ValidationError message={nameError} />)}
                    </div>
                    <input
                        type="text"
                        name="content"
                        placeholder="Note Content"
                        aria-label="Note Content"
                        value={this.state.content}
                        onChange={this.onAdd}
                    />
                    <div>
                        {this.state.content && (<ValidationError message={contentError} />)}
                    </div>
                    <select id="folders" name="folderId" value={this.state.folderId} onChange={this.onAdd}>
                        <option value="">Select Folder...</option>
                        {this.context.folders.map(folder => <option key={folder.id} value={folder.id}>{folder.name}</option>)}
                    </select>
                    <div>
                        {this.state.content && (<ValidationError message={folderError} />)}
                    </div>
                    <input type="submit"
                        value="Submit"
                        className="btn"
                        style={{ flex: "1" }}
                        disabled={
                            this.validateName() ||
                            this.validateContent() ||
                            this.validateFolder()
                        }
                    />



                </fieldset>
            </form>
        )
    }
}

export default AddNote
