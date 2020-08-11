const search = (state = { opacity: "0", width: "0" }, action) => {
  switch (action.type) {
    case "VISIBLE":
      return {
        ...state,
        opacity: action.payload.opacity,
        width: action.payload.width,
      };

    default:
      return state;
  }
};

export default search;
