// This function should return a list of posts, but it's incomplete.

import { Post, User } from "./models";
import { connectToDb } from "./utils";


export const getPosts = async () => {
    try {
      await connectToDb()
      const posts = await Post.find()
      console.log("posts===>",posts)
      return posts
    } catch (error) {
       console.error('Error getting posts:', error);
       throw new Error("Failed to fetch posts!")
    }
  };
  

  export const getPost = async (slug) => {
    try {
      await connectToDb()
      const post = await Post.find({slug: slug})
      return post
    } catch (error) {
       console.error('Error getting posts:', error);
       throw new Error("Failed to fetch posts!")
    }
  };
  
  export const getUsers = async () => {
    try {
      await connectToDb()
      const users = await User.find()
      console.log("users===>",users)
      return users
    } catch (error) {
       console.error('Error getting users:', error);
       throw new Error("Failed to fetch users!")
    }
  };
  export const getUser = async (id) => {
    try {
      await connectToDb()
      const user = await User.findById(id)
      return user
    } catch (error) {
       console.error('Error getting user:', error);
       throw new Error("Failed to fetch user!")
    }
  };
  

  