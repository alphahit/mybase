"use server";

import { Post } from "../models";
import { connectToDb } from "../utils";

export async function getBlogPost(slug) {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw new Error("Failed to fetch post");
  }
}

export async function getAllBlogPosts() {
  try {
    await connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw new Error("Failed to fetch posts");
  }
} 