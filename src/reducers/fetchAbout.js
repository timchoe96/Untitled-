const fetchAbout = (state ='', action) => {
  switch (action.type) {
    case "REQUEST_ABOUT_SUCCESS":
      return action.payload;

    default:
      return state;
  }
};

export default fetchAbout;
