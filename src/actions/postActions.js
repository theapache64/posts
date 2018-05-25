// @flow
import {CLEAR_FORM, FETCH_POSTS, NEW_POST} from '../actions/types';

export const fetchPosts = () => dispatch => {
    console.log('fetching');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
};

export const addPost = (postData) => dispatch => {

      console.log('posting new data');

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(data => data.json())
        .then(post => {

            dispatch({
                type: NEW_POST,
                payload: post
            });

        });


};

export const clearForm = () => dispatch => {
    console.log('clearing');
    dispatch({
        type: CLEAR_FORM,
        payload: {
            isClearForm: true
        }
    })
};