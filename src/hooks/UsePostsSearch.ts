import { useEffect, useState } from "react";
import { IPost, POST_LIMIT } from "../types/Posts";
import { IError, isInstanceOfIError } from "../types/Errors";
import { PostsService } from "../services/postsService";

function UsePostsSearch(page: number, keyword: string) {
  const [total, setTotal] = useState<number>(0);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [error, setError] = useState<IError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      const skip = page === 1 ? 0 : page * POST_LIMIT - POST_LIMIT;
      const response = await PostsService.fetchPosts(POST_LIMIT, skip, keyword !== "" ? keyword : undefined);
      if (isInstanceOfIError(response)) {
        setError(response);
        setTotal(0);
        setPosts([]);
      } else {
        setPosts(response.posts);
        setTotal(response.total);
        setError(null);
      }
      setIsLoading(false);
    }

    fetchPosts();
  }, [keyword, page]);

  return { posts, total, error, isLoading };
}

export default UsePostsSearch;
