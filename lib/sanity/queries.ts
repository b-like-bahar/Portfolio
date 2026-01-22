import { defineQuery, groq } from "next-sanity";

export const BLOG_LIST_QUERY = defineQuery(
  groq`*[
  _type == "post" 
  && defined(slug.current)
  ] | order(publishedAt desc) {
    _id,
    title,
    publishedAt,
    slug,
    category -> {name},
    image,
  }`
);

export const BLOG_POST_QUERY = defineQuery(
  groq`*[
  _type == "post" 
  && defined(slug.current) 
  && slug.current == $slug
  ] | order(publishedAt desc) [0] {
    _id,
    title,
    slug,
    publishedAt,
    category -> {name, slug},
    image,
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->,
        alt,
        caption,
        hotspot,
        crop
      }
    }
  }`
);

export const CATEGORY_LIST_QUERY = defineQuery(
  groq`*[
  _type == "category" 
  && defined(slug.current)
  ] | order(name asc) {
    _id,
    name,
    slug
  }`
);
