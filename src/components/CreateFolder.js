import React, { Component } from 'react'


export class CreateFolder extends Component {
    render() {
        return (

            <form >
                <fieldset>
                    <legend>Create a Folder</legend>
                    <input
                        type="text"
                        name="name"
                        placeholder="Add Name"
                    />
                </fieldset>
            </form>
        )
    }
}

export default CreateFolder
