const position = (state = "-1400px", action) => {
  switch (action.type) {
    case "POSITION":
      return action.payload;

    default:
      return state;
  }
};

export default position;
