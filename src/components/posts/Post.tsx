import React, { useEffect, useState } from "react";
import { PostsService } from "../../services/postsService";
import { useParams } from "react-router-dom";
import { IPost } from "../../types/Posts";
import ErrorAlert from "../errors/ErrorAlert";
import { IError, isInstanceOfIError } from "../../types/Errors";
import Loader from "../loader/Loader";

const Post: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<IPost | null>(null);
  const [error, setError] = useState<IError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchPost() {
      setIsLoading(true);
      const response = await PostsService.fetchPost(parseInt(id as string));
      if (isInstanceOfIError(response)) {
        setError(response);
        setPost(null);
      } else {
        setPost(response);
        setError(null);
      }
      setIsLoading(false);
    }
    fetchPost();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loader message={"LoadingPost"} />
      ) : (
        post && (
          <div className="post">
            <h2 className="post__title">{post.title}</h2>
            <div className="post__body">{post.body}</div>
          </div>
        )
      )}
      {error && <ErrorAlert {...error} />}
    </>
  );
};

export default Post;
