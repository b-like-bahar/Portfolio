/**
 * Sanity utilities for images and videos
 * Converts Sanity image objects to URLs and video URLs to embed format
 */

import {
  createImageUrlBuilder,
  type SanityImageSource,
  type ImageUrlBuilder,
} from "@sanity/image-url";

const projectId = "be2t44ka";
const dataset = "production";

/**
 * Converts Sanity image objects to optimized URLs
 * @param source - Sanity image object (from post.image)
 * @returns URL builder with .width(), .height(), .url() methods, or null
 * @example urlFor(post.image)?.width(800).height(450).url()
 */
export const urlFor = (source: SanityImageSource): ImageUrlBuilder | null => {
  if (!projectId || !dataset || !source) return null;
  return createImageUrlBuilder({ projectId, dataset }).image(source);
};

/**
 * Converts video URLs to embeddable iframe URLs
 * Supports YouTube (watch/short URLs) and Vimeo
 * @param videoUrl - Video URL from Sanity (from post.video)
 * @returns Embed URL string, or null if invalid/unsupported
 * @example urlForVideo("youtube.com/watch?v=abc") → "youtube.com/embed/abc"
 */
export const urlForVideo = (
  videoUrl: string | null | undefined
): string | null => {
  if (!videoUrl || typeof videoUrl !== "string") return null;

  try {
    const url = new URL(videoUrl);

    // YouTube: convert watch/short URLs to embed
    if (
      url.hostname.includes("youtube.com") ||
      url.hostname.includes("youtu.be")
    ) {
      let videoId: string | null = null;

      if (url.hostname.includes("youtube.com") && url.pathname === "/watch") {
        videoId = url.searchParams.get("v");
      } else if (url.hostname.includes("youtu.be")) {
        videoId = url.pathname.slice(1);
      } else if (url.pathname.startsWith("/embed/")) {
        return videoUrl; // Already embed format
      }

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    // Vimeo: convert to embed format
    if (url.hostname.includes("vimeo.com")) {
      // Already embed format - check this first before general vimeo.com check
      if (url.hostname === "player.vimeo.com") {
        return videoUrl;
      }
      // Convert regular vimeo.com URLs to embed format
      const videoId = url.pathname.split("/").filter(Boolean).pop();
      if (videoId) {
        return `https://player.vimeo.com/video/${videoId}`;
      }
    }

    // Direct video file
    if (videoUrl.match(/\.(mp4|webm|ogg|mov)(\?|$)/i)) {
      return videoUrl;
    }

    return null;
  } catch {
    return null; // Invalid URL
  }
};
