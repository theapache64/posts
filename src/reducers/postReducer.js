// @flow
import {CLEAR_FORM, FETCH_POSTS, NEW_POST} from '../actions/types';

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

        case CLEAR_FORM:
            console.log('clearing form');
            return {
                ...state,
                isClearForm : action.payload.isClearForm
            };
        default:
            return state
    }

}