import React from "react";
import { IPost } from "../../types/Posts";
import "../utils/forms/form.css";
import "./posts.css";
import { NavLink } from "react-router-dom";

interface PostProps {
  post: IPost;
}

const PostListItem: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="post__item">
      <NavLink to={`/posts/${post.id}`} className="post__title">
        {post.title}
      </NavLink>
    </div>
  );
};

export default PostListItem;
