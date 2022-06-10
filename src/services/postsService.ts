import axios from "axios";
import { IPost } from "../types/Posts";
import { IError } from "../types/Errors";

export class PostsService {
  private static apiPath = process.env.REACT_APP_API_PATH;

  static async fetchPosts(
    limit: number,
    skip: number,
    keyword?: string
  ): Promise<{ posts: IPost[]; total: number } | IError> {
    try {
      let response;
      if (keyword) {
        response = await axios.get(`${this.apiPath}/posts/search`, {
          params: { limit, skip, q: keyword },
        });
      } else {
        response = await axios.get(`${this.apiPath}/posts`, {
          params: { limit, skip },
        });
      }
      return { posts: response.data.posts, total: response.data.total };
    } catch (e: any) {
      if (e.message && e.code) {
        return { message: e.message, code: e.code };
      } else {
        return { message: "Something went wrong", code: 520 };
      }
    }
  }

  static async fetchPost(id: number): Promise<IPost | IError> {
    try {
      const response = await axios.get(`${this.apiPath}/posts/${id}`);
      return response.data;
    } catch (e: any) {
      if (e.message && e.code) {
        return { message: e.message, code: e.code };
      } else {
        return { message: "Something went wrong", code: 520 };
      }
    }
  }
}
