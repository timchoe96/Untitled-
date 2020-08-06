export const timeChange = (time) => {
  return {
    type: "TIME",
    payload: time,
  };
};

export const navToggle = (position) => {
  return {
    type: "POSITION",
    payload: position,
  };
};
