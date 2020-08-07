const fetchJournal = (state = "", action) => {
  switch (action.type) {
    case "REQUEST_JOURNAL_SUCCESS":
      return action.payload;

    default:
      return state;
  }
};

export default fetchJournal;
