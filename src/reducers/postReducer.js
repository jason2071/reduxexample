import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;
    case FETCH_POSTS:
      return {
        ...state,
        items: payload
      };
    case NEW_POST:
      return {
        ...state,
        item: payload
      };
  }
}
