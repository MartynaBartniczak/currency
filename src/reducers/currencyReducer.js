import { FETCH_CURRENCY } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CURRENCY:
      console.log(action.payload);
      return action.payload.data;

    default:
      return state;
  }
}
