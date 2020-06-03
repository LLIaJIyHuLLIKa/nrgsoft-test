import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  setLike,
  fetchPosts,
  posts,
  loadingFlag,
} from "../app/slices/postsSlice";
import Sections from "../components/Sections/Sections";
import Posts from "../components/Posts/Posts";
import './MainPage.scss';

const MainPage = () => {
  const postsList = useSelector(posts);
  const loading = useSelector(loadingFlag);
  const dispatch = useDispatch();

  const handleButtonClick = (sectionTitle) => {
    // получение постов
    dispatch(fetchPosts(sectionTitle));
  };
  const handleLikeClick = (index) => {
    // поставить / снять лайк
    dispatch(setLike(index));
  };
  const handleDelete = (index) => {
    // удаление поста
    dispatch(deletePost(index));
  };

  return (
    <div className="container">
      <Sections handleButtonClick={handleButtonClick} />
      {postsList.length > 0 && (
        <Posts
          posts={postsList}
          handleDelete={handleDelete}
          handleLikeClick={handleLikeClick}
        />
      )}
      {loading && (
        <div className="loading">
          <i className="fa fa-spinner"></i>
        </div>
      )}
    </div>
  );
};

export default MainPage;
