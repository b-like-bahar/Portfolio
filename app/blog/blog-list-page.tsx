"use client";

import { Heading2, Text } from "@/components/ui/typography";
import { BlogPreviewCard } from "@/components/blog-preview-card";
import Navigation from "@/components/navigation";
import type {
  BLOG_LIST_QUERY_RESULT,
  CATEGORY_LIST_QUERY_RESULT,
} from "@/lib/sanity/types";
import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";

type BlogPostWithImageUrl = BLOG_LIST_QUERY_RESULT[number] & {
  imageUrl: string | null;
};

type BlogListPageProps = {
  blogPosts: BlogPostWithImageUrl[];
  categories: CATEGORY_LIST_QUERY_RESULT;
};

export default function BlogListPage({
  blogPosts,
  categories,
}: BlogListPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedCategorySlug = searchParams.get("category");

  const filteredBlogPosts = useMemo(() => {
    if (!selectedCategorySlug) {
      return blogPosts;
    }

    const selectedCategory = categories.find(
      (cat) => cat.slug?.current === selectedCategorySlug
    );

    if (!selectedCategory?.name) {
      return blogPosts;
    }

    return blogPosts.filter(
      (blogPost) => blogPost.category?.name === selectedCategory.name
    );
  }, [blogPosts, categories, selectedCategorySlug]);

  const categoryClickHandler = (categorySlug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", categorySlug);
    router.push(`blog?${params.toString()}`);
  };

  const clearFilter = () => {
    router.push("blog");
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0B0F14] pt-16">
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <Heading2 className="section-title mb-4">Bahar's Notes</Heading2>
              <Text variant="muted" size="lg" className="max-w-2xl mx-auto">
                This blog is a collection of notes from my learning journey. I
                write about concepts I'm exploring, features I'm building, and
                moments where something finally clicks, so future me (and maybe
                you) can learn from it.
              </Text>
            </div>

            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={clearFilter}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                  !selectedCategorySlug
                    ? "border-[#8B8CF6] bg-[#111827] text-[#8B8CF6] shadow-[0_0_15px_rgba(139,140,246,0.3)]"
                    : "border-[#111827] bg-[#111827] text-[#9CA3AF] hover:border-[#8B8CF6]/60 hover:text-[#E5E7EB]"
                }`}
              >
                All
              </button>
              {categories.map((category) => {
                const isActive =
                  category?.slug?.current === selectedCategorySlug;
                return (
                  category?.name && (
                    <button
                      onClick={() =>
                        categoryClickHandler(category.slug?.current ?? "")
                      }
                      key={category._id}
                      className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                        isActive
                          ? "border-[#8B8CF6] bg-[#111827] text-[#8B8CF6] shadow-[0_0_15px_rgba(139,140,246,0.3)]"
                          : "border-[#111827] bg-[#111827] text-[#9CA3AF] hover:border-[#8B8CF6]/60 hover:text-[#E5E7EB]"
                      }`}
                    >
                      {category.name}
                    </button>
                  )
                );
              })}
            </div>

            {filteredBlogPosts.length === 0 ? (
              <div className="text-center py-16">
                <Text variant="muted" size="lg">
                  {selectedCategorySlug
                    ? "No blog posts found in this category."
                    : "No blog posts yet. Check back soon!"}
                </Text>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-lg mx-auto md:max-w-none md:mx-0">
                {filteredBlogPosts
                  .filter(
                    (
                      blogPost
                    ): blogPost is BlogPostWithImageUrl & {
                      slug: { current: string };
                      publishedAt: string;
                      title: string;
                    } =>
                      Boolean(
                        blogPost.slug?.current &&
                        blogPost.publishedAt &&
                        blogPost.title
                      )
                  )
                  .map((blogPost) => (
                    <BlogPreviewCard
                      key={blogPost._id}
                      title={blogPost.title}
                      slug={blogPost.slug}
                      imageUrl={blogPost.imageUrl}
                      category={blogPost.category}
                      publishedAt={blogPost.publishedAt}
                      imageSizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
