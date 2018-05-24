// @flow
import {FETCH_POSTS, NEW_POST} from '../actions/types';

const initialState = {
    posts: [],
    post: {}
};

export default function(state = initialState, action) {

    switch (action.type) {

        case NEW_POST:
            console.log('new post reducer: ');
            return {
                ...state,
                post: action.payload
            };

        case FETCH_POSTS:
            console.log('fetch post reducer: ');
            return {
                ...state,
                posts: action.payload
            };

        default:
            return state
    }

}