import { client } from "@/lib/sanity/client";
import { BLOG_POST_QUERY } from "@/lib/sanity/queries";
import type { BLOG_POST_QUERY_RESULT } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/utils";
import { notFound } from "next/navigation";
import BlogPostClientPage from "./blog-post-page";

const options = { next: { revalidate: 30 } };

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

type BlogPost = NonNullable<BLOG_POST_QUERY_RESULT>;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blogPost = await client.fetch<BLOG_POST_QUERY_RESULT>(
    BLOG_POST_QUERY,
    { slug },
    options
  );

  if (!blogPost || !blogPost.title) {
    notFound();
  }

  const post = blogPost as BlogPost;

  const imageUrl: string | null = post.image
    ? (urlFor(post.image)?.width(1200).height(630).url() ?? null)
    : null;

  return (
    <BlogPostClientPage
      post={post}
      imageUrl={imageUrl}
      videoEmbedUrl={null as string | null}
    />
  );
}
