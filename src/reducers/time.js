const time = (state = "", action) => {
  switch (action.type) {
    case "TIME":
      return action.payload;

    default:
      return state;
  }
};

export default time;
