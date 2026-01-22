"use client";

import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import {
  Heading1,
  Heading2,
  Heading3,
  Text,
  Blockquote,
} from "@/components/ui/typography";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { format } from "date-fns";
import { urlFor, urlForVideo } from "@/lib/sanity/utils";
import type { BLOG_POST_QUERY_RESULT } from "@/lib/sanity/types";

type BlogPost = NonNullable<BLOG_POST_QUERY_RESULT>;

type BlogPostPageProps = {
  post: BlogPost;
  imageUrl: string | null;
  videoEmbedUrl: string | null;
};

export default function BlogPostClientPage({
  post,
  imageUrl,
  videoEmbedUrl,
}: BlogPostPageProps) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0B0F14] pt-16">
        <article className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-12 space-y-6">
              <div>
                <Heading1 className="text-4xl lg:text-5xl font-bold break-words mb-4 text-[#E5E7EB]">
                  {post.title}
                </Heading1>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {post.publishedAt && (
                  <Text size="sm" variant="muted">
                    {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                  </Text>
                )}
                {post.category?.name && post.category.slug?.current && (
                  <Link
                    href={`/blog?category=${post.category.slug.current}`}
                    className="px-3 py-1.5 bg-[#111827] rounded border border-[#111827] hover:border-[#8B8CF6] text-[#8B8CF6] text-sm transition-all duration-300"
                  >
                    {post.category.name}
                  </Link>
                )}
              </div>
            </header>

            {/* Featured Image */}
            {imageUrl && (
              <div className="mb-12 rounded-lg overflow-hidden">
                <AspectRatio
                  ratio={16 / 9}
                  className="overflow-hidden rounded-lg"
                >
                  <Image
                    src={imageUrl}
                    alt={post.title ?? "Blog image"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 768px"
                    className="object-contain"
                    priority
                  />
                </AspectRatio>
              </div>
            )}

            {/* Content */}
            {post.body && Array.isArray(post.body) && (
              <div
                className="w-full break-words"
                style={{
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                  maxWidth: "100%",
                }}
              >
                <PortableText
                  value={post.body}
                  components={{
                    block: {
                      h2: ({ children }) => (
                        <Heading2
                          className="mt-12 mb-6 text-3xl font-semibold break-words"
                          style={{
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                          }}
                        >
                          {children}
                        </Heading2>
                      ),
                      h3: ({ children }) => (
                        <Heading3
                          className="mt-8 mb-4 text-2xl font-semibold break-words"
                          style={{
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                          }}
                        >
                          {children}
                        </Heading3>
                      ),
                      blockquote: ({ children }) => (
                        <Blockquote
                          className="my-8 border-l-4 border-[#8B8CF6] pl-6 pr-4 text-lg italic text-[#9CA3AF] break-words bg-[#111827] py-4 rounded-r-lg"
                          style={{
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                          }}
                        >
                          {children}
                        </Blockquote>
                      ),
                      normal: ({ children }) => (
                        <Text
                          size="lg"
                          className="mb-6 leading-relaxed text-[#E5E7EB] break-words"
                          style={{
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                          }}
                        >
                          {children}
                        </Text>
                      ),
                    },
                    marks: {
                      strong: ({ children }) => (
                        <strong
                          className="font-semibold text-[#E5E7EB] break-words"
                          style={{
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                          }}
                        >
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => (
                        <em
                          className="italic break-words"
                          style={{
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                          }}
                        >
                          {children}
                        </em>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul
                          className="my-6 ml-6 list-disc space-y-3 [&>li]:text-lg [&>li]:leading-relaxed [&>li]:break-words [&>li]:text-[#E5E7EB]"
                          style={{
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                          }}
                        >
                          {children}
                        </ul>
                      ),
                      number: ({ children }) => (
                        <ol
                          className="my-6 ml-6 list-decimal space-y-3 [&>li]:text-lg [&>li]:leading-relaxed [&>li]:break-words [&>li]:text-[#E5E7EB]"
                          style={{
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                          }}
                        >
                          {children}
                        </ol>
                      ),
                    },
                    types: {
                      image: ({ value }) => {
                        if (!value || !value.asset) {
                          return null;
                        }

                        try {
                          const inlineImageUrl = urlFor(value)
                            ?.width(1200)
                            .url();
                          if (!inlineImageUrl) {
                            return null;
                          }

                          return (
                            <figure className="my-8">
                              <div className="rounded-lg overflow-hidden">
                                <AspectRatio
                                  ratio={16 / 9}
                                  className="overflow-hidden rounded-lg"
                                >
                                  <Image
                                    src={inlineImageUrl}
                                    alt={value.alt || "Blog post image"}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 768px"
                                    className="object-contain"
                                  />
                                </AspectRatio>
                              </div>
                              {value.caption && (
                                <figcaption className="mt-3 text-center text-sm text-[#9CA3AF]">
                                  {value.caption}
                                </figcaption>
                              )}
                            </figure>
                          );
                        } catch (error) {
                          // Silently fail if image URL can't be generated
                          console.error("Failed to generate image URL:", error);
                          return null;
                        }
                      },
                      video: ({ value }) => {
                        if (!value || !value.url) return null;
                        const inlineVideoEmbedUrl = urlForVideo(value.url);
                        if (!inlineVideoEmbedUrl) return null;
                        return (
                          <figure className="my-8">
                            <AspectRatio
                              ratio={16 / 9}
                              className="overflow-hidden rounded-lg"
                            >
                              <iframe
                                src={inlineVideoEmbedUrl}
                                title={value.caption || "Blog post video"}
                                className="h-full w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </AspectRatio>
                            {value.caption && (
                              <figcaption className="mt-3 text-center text-sm text-[#9CA3AF]">
                                {value.caption}
                              </figcaption>
                            )}
                          </figure>
                        );
                      },
                      code: ({ value }) => {
                        if (!value || !value.code) return null;
                        return (
                          <div className="my-8 rounded-lg overflow-hidden border border-[#111827] bg-[#111827]">
                            {(value.filename || value.language) && (
                              <div className="px-4 py-2 bg-[#0B0F14] border-b border-[#111827] flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  {value.filename && (
                                    <Text
                                      size="sm"
                                      className="text-[#8B8CF6] font-mono"
                                    >
                                      {value.filename}
                                    </Text>
                                  )}
                                  {value.language &&
                                    value.language !== "text" && (
                                      <Text
                                        size="xs"
                                        className="px-2 py-0.5 bg-[#111827] rounded text-[#9CA3AF]"
                                      >
                                        {value.language}
                                      </Text>
                                    )}
                                </div>
                              </div>
                            )}
                            <pre className="p-4 overflow-x-auto">
                              <code className="text-sm text-[#E5E7EB] font-mono leading-relaxed whitespace-pre">
                                {value.code}
                              </code>
                            </pre>
                          </div>
                        );
                      },
                    },
                  }}
                />
              </div>
            )}

            {/* Video */}
            {videoEmbedUrl && (
              <div className="mb-12 rounded-lg overflow-hidden">
                <AspectRatio
                  ratio={16 / 9}
                  className="overflow-hidden rounded-lg"
                >
                  <iframe
                    src={videoEmbedUrl}
                    title={post.title ?? "Blog video"}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </AspectRatio>
              </div>
            )}
          </div>
        </article>
      </main>
    </>
  );
}
