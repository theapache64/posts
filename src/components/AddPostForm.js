// @flow
import React, {Component} from 'react'

export default class AddPostForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }


    onSubmit = (e) => {
        e.preventDefault();

        const postData = {
            title: this.state.title,
            body: this.state.body
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(data => data.json())
            .then(post => console.log(post));
    };

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        return (
            <div>
                <h1>Add Post</h1>

                {/*Form*/}
                <form onSubmit={this.onSubmit}>


                    <div>
                        <label>Title:</label>
                        <br/>
                        <input onChange={this.onChangeInput} value={this.state.title} type="text" name="title"/>
                    </div>
                    <br/>
                    <div>
                        <label>Body:</label>
                        <br/>
                        <textarea onChange={this.onChangeInput} value={this.state.body} name="body"/>
                    </div>

                    <button type="submit">Add</button>

                </form>
            </div>
        )
    }

}