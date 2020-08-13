const fetchDocuments = (
  state = { isPending: false, documents: [], error: "" },
  action
) => {
  switch (action.type) {
    case "REQUEST_DOCUMENTS_PENDING":
      return { ...state, isPending: true };

    case "REQUEST_DOCUMENTS_SUCCESS":
      return {
        ...state,
        documents: action.payload,
      };

    case "REQUEST_DOCUMENTS_FAILED":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default fetchDocuments;
