import { FETCH_CURRENCY } from "../actions/index";

export default function(state = [], action) {
  console.log(action, "action");

  switch (action.type) {
    case FETCH_CURRENCY:
      return action.payload.data;
    default:
      return state;
  }
}
