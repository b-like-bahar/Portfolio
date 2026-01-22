import BlogListPage from "./blog-list-page";
import type {
  BLOG_LIST_QUERY_RESULT,
  CATEGORY_LIST_QUERY_RESULT,
} from "@/lib/sanity/types";
import { BLOG_LIST_QUERY, CATEGORY_LIST_QUERY } from "@/lib/sanity/queries";
import { client } from "@/lib/sanity/client";
import { urlFor } from "@/lib/sanity/utils";
import { Suspense } from "react";

export default async function BlogPage() {
  const options = { next: { revalidate: 30 } };
  const blogPosts = await client.fetch<BLOG_LIST_QUERY_RESULT>(
    BLOG_LIST_QUERY,
    {},
    options
  );
  const categories = await client.fetch<CATEGORY_LIST_QUERY_RESULT>(
    CATEGORY_LIST_QUERY,
    {},
    options
  );

  const blogPostsWithImageUrls = blogPosts.map((blogPost) => ({
    ...blogPost,
    imageUrl: blogPost.image
      ? (urlFor(blogPost.image)?.width(800).height(600).url() ?? null)
      : null,
  }));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogListPage
        blogPosts={blogPostsWithImageUrls}
        categories={categories}
      />
    </Suspense>
  );
}
