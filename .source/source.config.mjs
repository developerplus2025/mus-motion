// source.config.ts
import { defineDocs } from "fumadocs-mdx/config";
var docs = defineDocs({
  dir: "content/docs"
});
var blogPosts = defineDocs({
  dir: "content/blog"
});
export {
  blogPosts,
  docs
};
