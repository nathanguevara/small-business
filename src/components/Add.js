import React, { useReducer } from "react";
import { Navigate, useNavigate } from "react-router";
import Map from "./Map";

const intialFormState = {
  business: "",
  description: "",
  address: "",
  open: "",
};

const formReducer = (state, action) => {
  console.log(action);
  return {
    ...state,
    [action.input]: action.value,
  };
};

const Add = (props) => {
  const navigate = useNavigate();

  const [formState, dispatch] = useReducer(formReducer, intialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const action = {
      input: name,
      value: value,
    };
    dispatch(action);
  };

  const handleListing = (e) => {
    e.preventDefault();
    const payload = { ...formState };
    payload.id = props.listings.length + 1;
    props.addListing(payload);

    navigate("/");
  };

  return (
    <>
      <div className="add-container">
        <div className="form">
          <input
            type="text"
            name="business"
            placeholder="Name"
            onChange={handleChange}
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />

          <input
            type="text"
            name="open"
            placeholder="Operating hrs"
            onChange={handleChange}
          />

          <button className="add-button" onClick={handleListing}>
            Save
          </button>
        </div>

        <div className="add-map">
          <Map />
        </div>
      </div>
    </>
  );
};

export default Add;