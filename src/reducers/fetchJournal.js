const fetchJournal = (
  state = { isPending: false, journal: [], error: "" },
  action
) => {
  switch (action.type) {
    case "REQUEST_JOURNAL_PENDING":
      return { ...state, isPending: true };

    case "REQUEST_JOURNAL_SUCCESS":
      return {
        ...state,
        journal: action.payload,
      };

    case "REQUEST_JOURNAL_FAILED":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default fetchJournal;
