// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux';

import {fetchPosts} from '../actions/postActions';

class Posts extends Component {

    componentWillMount() {
        console.log("Called");
        this.props.fetchPosts()
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.post){
            this.props.posts.unshift(nextProps.post);
        }
    }


    render() {

        const postItems = this.props.posts.map(post => {
            return (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )
        });

        return (
            <div>
                {postItems}
            </div>
        );
    }

}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    post : state.posts.post
});

export default connect(mapStateToProps, {fetchPosts})(Posts);