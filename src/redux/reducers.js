import { combineReducers } from "redux";

const user = (state = null) => state;

const listings = (state = [], action) => {
  switch (action.type) {
    case "ADD_Listing":
      return [...state, action.value];
    case "REMOVE_Listing":
      const listings = [...state];
      listings.splice(action.value, 1);
      return listings;
    default:
      return state;
  }
};

export default combineReducers({ user, listings });