import { Heading4, Text } from "@/components/ui/typography";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

type BlogPreviewCardProps = {
  title: string | null;
  slug: { current?: string } | null;
  imageUrl: string | null;
  category?: {
    name: string | null;
  } | null;
  publishedAt?: string | null;
  imageSizes?: string;
};

export function BlogPreviewCard({
  title,
  slug,
  imageUrl,
  category,
  publishedAt,
  imageSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: BlogPreviewCardProps) {
  if (!slug?.current || !title) {
    return null;
  }

  return (
    <Link href={`blog/${slug.current}`} className="group block h-full">
      <div
        className="h-full bg-[#111827] rounded-lg border border-[#111827] hover:border-[#8B8CF6] transition-all duration-300 overflow-hidden flex flex-col pt-4 md:pt-6"
        style={{
          boxShadow: "0 0 0 0 rgba(139, 140, 246, 0)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 0 30px rgba(139, 140, 246, 0.15)";
          e.currentTarget.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 0 0 0 rgba(139, 140, 246, 0)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {imageUrl && (
          <div className="relative w-full aspect-video overflow-hidden bg-[#111827]">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes={imageSizes}
              className="object-contain transition-transform duration-300 ease-out scale-110 group-hover:scale-[1.18]"
            />
          </div>
        )}
        <div className="p-4 md:p-6 flex flex-col flex-1">
          <Heading4 className="mb-2 md:mb-3 mt-3 md:mt-4 group-hover:text-[#8B8CF6] transition-colors duration-300 break-words">
            {title}
          </Heading4>

          {category?.name && (
            <Text
              size="sm"
              className="mb-2 md:mb-3 px-2 md:px-3 py-1 md:py-1.5 bg-[#0B0F14] rounded border border-[#111827] text-[#8B8CF6] inline-block w-fit text-xs md:text-sm"
            >
              {category.name}
            </Text>
          )}

          {publishedAt && (
            <Text
              size="sm"
              variant="muted"
              className="mt-auto text-xs md:text-sm"
            >
              {format(new Date(publishedAt), "MMMM d, yyyy")}
            </Text>
          )}
        </div>
      </div>
    </Link>
  );
}
