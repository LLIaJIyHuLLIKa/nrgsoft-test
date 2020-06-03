import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const postsSlice = createSlice({
  name: "posts-slice",
  initialState: {
    posts: [], // список постов
    loading: false, // флаг загрузки постов
  },
  reducers: {
    addPost: (state, { payload }) => {
      // добавить пост в список
      state.posts.push(payload);
    },
    deletePost: (state, { payload }) => {
      // удаление поста из списка
      state.posts.splice(payload, 1);
    },
    setLoading: (state, { payload }) => {
      // изменение флага загрузки
      state.loading = payload;
    },
    setLike: (state, { payload }) => {
      // изменение лайка
      state.posts[payload].like =
        (state.posts[payload].like === false) ? true : false;
    },
  },
});

export const { addPost, deletePost, setLoading, setLike } = postsSlice.actions;
export const posts = (state) => state.posts;
export const loadingFlag = (state) => state.loading;
export default postsSlice.reducer;

export function fetchPosts(subreddit) {
  // получение постов из Реддита
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await axios.get(
        `http://www.reddit.com/r/${subreddit}.json`
      );
      const data = response.data.data.children;

      const randomIndex = Math.floor(Math.random() * data.length); // выбираем случайный пост
      const newPost = {
        like: false,
        postObj: data[randomIndex],
      };

      dispatch(addPost(newPost));  // добавляем его в список
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
}
