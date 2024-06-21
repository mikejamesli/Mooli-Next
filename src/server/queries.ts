import "server-only"
import { db } from "./db";

export async function getPosts() {
  const posts = await db.query.posts.findMany();
  return posts;
}