import React, { useState } from "react";
import PostListItem from "./PostListItem";
import ErrorAlert from "../errors/ErrorAlert";
import Loader from "../loader/Loader";
import Pagination from "@mui/material/Pagination";
import UsePostsSearch from "../../hooks/UsePostsSearch";
import { POST_LIMIT } from "../../types/Posts";
import PostSearchForm from "./PostSearchForm";

const PostList: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>("");
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const { posts, total, error, isLoading } = UsePostsSearch(page, searchKeyword);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const handleFindClick = () => {
    setPage(1);
    setSearchKeyword(keyword);
  };

  return (
    <>
      <PostSearchForm keyword={keyword} handleFindClick={handleFindClick} handleChange={handleInputChange} />
      <div className="post__wrapper">
        {isLoading ? (
          <Loader message={"LoadingPosts"} />
        ) : posts.length ? (
          <>
            {posts.map((post) => (
              <PostListItem key={post.id} post={post} />
            ))}
            {Math.ceil(total / POST_LIMIT) > 1 && (
              <Pagination
                className="pagination"
                count={Math.ceil(total / POST_LIMIT)}
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <div className="error__message">No posts found :(</div>
        )}
        {error && <ErrorAlert {...error} />}
      </div>
    </>
  );
};

export default PostList;
