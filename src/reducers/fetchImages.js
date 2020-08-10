const fetchImages = (
  state = { isPending: false, images: [], error: "" },
  action
) => {
  switch (action.type) {
    case "REQUEST_IMAGES_PENDING":
      return { ...state, isPending: true };

    case "REQUEST_IMAGES_SUCCESS":
      return { ...state, images: [...state.images, ...action.payload] };

    case "REQUEST_IMAGES_FAILED":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default fetchImages;
