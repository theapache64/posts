// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addPost,clearForm} from '../actions/postActions';

class AddPostForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.isClearForm){
            this.setState({
                title: '',
                body: ''
            });
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        const postData = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.addPost(postData);
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

const mapStateToProps = state => ({
    post: state.posts.post,
    isClearForm : state.posts.isClearForm
});

export default connect(mapStateToProps, {addPost, clearForm})(AddPostForm)