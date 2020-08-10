var contentful = require("contentful");

var client = contentful.createClient({
  space: "dlipnuauv0sj",
  accessToken: "wE7IZ7NvcSRJkr8slwMR5ZM6zEByjDgC7y1nEn36gx4",
});

export const getAbout = () => (dispatch) => {
  dispatch({ type: "REQUEST_ABOUT_PENDING" });
  client
    .getEntries({ content_type: "about" })
    .then((resp) =>
      dispatch({
        type: "REQUEST_ABOUT_SUCCESS",
        payload: resp.items[0].fields.about,
      })
    )
    .catch((error) =>
      dispatch({ type: "REQUEST_ABOUT_FAILED", payload: error })
    );
};

export const getBlog = () => (dispatch) => {
  dispatch({ type: "REQUEST_JOURNAL_PENDING" });
  fetch(
    `https://www.googleapis.com/blogger/v3/blogs/9085604028025620950/posts?key=AIzaSyChWrKyLjsVyYj42CKBstkjrOnKWwPLqDs&fetchImages=true&maxResults=500`
  )
    .then((resp) => resp.json())
    .then((data) =>
      dispatch({
        type: "REQUEST_JOURNAL_SUCCESS",
        payload: data.items,
      })
    )
    .catch((error) =>
      dispatch({ type: "REQUEST_JOURNAL_FAILED", payload: error })
    );
};

export const getImages = () => (dispatch) => {
  dispatch({ type: "REQUUEST_IMAGES_PENDING" });
  fetch(
    `https://api.tumblr.com/v2/blog/t:ludyybtv8EyHxeJzIanq3w/info?api_key=1K5kBBtN3I6XMgfAB6qU4kQieFrKuz2abpFw21YxeauKQcUW2s`
  )
    .then((res) => res.json())
    .then((data) => Math.ceil(data.response.blog.posts / 50))
    .then((number) => {
      for (let i = 0; i < number; i++) {
        fetch(
          `https://api.tumblr.com/v2/blog/t:ludyybtv8EyHxeJzIanq3w/posts?api_key=1K5kBBtN3I6XMgfAB6qU4kQieFrKuz2abpFw21YxeauKQcUW2s&limit=50&offset=${
            i * 50
          }`
        )
          .then((res) => res.json())
          .then((data) =>
            dispatch({
              type: "REQUEST_IMAGES_SUCCESS",
              payload: data.response.posts,
            })
          );
      }
    })
    .catch((error) =>
      dispatch({ type: "REQUEST_IMAGES_FAILED", payload: error })
    );
};

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
