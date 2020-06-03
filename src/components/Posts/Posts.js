import React from "react";
import PropTypes from "prop-types";
import { List } from "react-virtualized";
import "./Posts.scss";

const Posts = (props) => {
  const rowRenderer = ({ key, index, isScrolling, isVisible, style }) => {
    return (
      <div key={key} style={style} className="posts__item">
        <i
          onClick={() => props.handleLikeClick(index)}
          className={`fa fa-heart ${
            props.posts[index].like ? "red-heart" : ""
          }`}
        ></i>
        <i
          onClick={() => props.handleDelete(index)}
          className="fa fa-trash"
        ></i>
        <a href={props.posts[index].postObj.data.url}>{props.posts[index].postObj.data.title}</a>
      </div>
    );
  };

  return (
    <div className="posts">
      <List
        rowCount={props.posts.length}
        width={1200}
        height={350}
        rowHeight={50}
        rowRenderer={rowRenderer}
      />
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
  handleDelete: PropTypes.func,
  handleLikeClick: PropTypes.func,
};

export default Posts;
