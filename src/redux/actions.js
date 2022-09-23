
export const addListing = (listing) => {
  return {
    type: "ADD_Listing",
    value: listing,
  };
};

export const removeListing = (index) => {
  return {
    type: "REMOVE_Listing",
    value: index,
  };
};