const fetchAbout = (
  state = { isPending: false, error: "", about: "" },
  action
) => {
  switch (action.type) {
    case "REQUEST_ABOUT_PENDING":
      return { ...state, isPending: true };

    case "REQUEST_ABOUT_SUCCESS":
      return { ...state, about: action.payload };

    case "REQUEST_ABOUT_FAILED":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default fetchAbout;
