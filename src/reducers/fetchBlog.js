const fetchBlog = (
  state = { isPending: false, blog: [], error: "" },
  action
) => {
  switch (action.type) {
    case "REQUEST_BLOG_PENDING":
      return { ...state, isPending: true };

    case "REQUEST_BLOG_SUCCESS":
      return {
        ...state,
        blog: action.payload,
      };

    case "REQUEST_BLOG_FAILED":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default fetchBlog;
