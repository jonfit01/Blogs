import _ from 'lodash';
import { CREATE_BLOG, FETCH_BLOG, FETCH_BLOGS, DELETE_BLOG, EDIT_BLOG } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
      case FETCH_BLOGS:
        return { ...state, ..._.mapKeys(action.payload, 'id') };
      case FETCH_BLOG:
        return { ...state, [action.payload.id]: action.payload };
      case CREATE_BLOG:
        return { ...state, [action.payload.id]: action.payload };
      case EDIT_BLOG:
        return { ...state, [action.payload.id]: action.payload };
      case DELETE_BLOG:
        return _.omit(state, action.payload);
      default:
        return state;
    }
  };