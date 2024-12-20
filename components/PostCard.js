import React from "react";
import Image from "next/Image";
import Link from "next/Link";
import Badge from "./Badge";
import AuthorMeta from "./AuthorMeta";

const PostCard = ({
  className = "h-full",
  post,
  hiddenAuthor = false,
  ratio = "aspect-w-4 aspect-h-3",
}) => {
  const { title, category, date, cover_image, author_image, author } =
    post.frontmatter || {};

  return (
    <div
      className={`nc-Card11 group relative flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-neutral-900 ${className}`}
    >
      <div
        className={`relative z-10 block w-full flex-shrink-0 overflow-hidden rounded-t-3xl ${ratio}`}
      >
        <div>
          {/* to be moved to Media component */}
          <div className={"nc-PostFeaturedMedia relative h-full w-full"}>
            <Image
              alt="featured"
              layout="fill"
              className="absolute inset-0 h-full w-full object-cover"
              src={cover_image}
              sizes="(max-width: 600px) 480px, 800px"
            />

            {/* <Link
              href={`/blog/${post.slug}`}
              className={
                "absolute inset-0 block bg-black/20 opacity-0 transition-opacity group-hover:opacity-100"
              }
            /> */}
          </div>
        </div>
      </div>
      {/* <Link href={`/blog/${post.slug}`} className="absolute inset-0"></Link> */}
      <span className="absolute inset-x-3 top-3 z-10">
        <div
          className={`nc-CategoryBadgeList flex flex-wrap space-x-2`}
          data-nc-id="CategoryBadgeList"
        >
          <Badge>{category}</Badge>
        </div>
      </span>

      <div className="flex flex-col space-y-3 p-4">
        {!hiddenAuthor ? (
          <AuthorMeta meta={{ date, author_image, author }} />
        ) : (
          <span className="text-xs text-neutral-500">{date}</span>
        )}
        <h3 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
          <Link href={`/blog/${post.slug}`}>
            <span className="line-clamp-2 hover:underline" title={title}>
              {title}
            </span>
          </Link>
        </h3>
        {/* <div className="flex items-end justify-between mt-auto">
            user cta to be added
        </div> */}
      </div>
    </div>
  );
};

export default PostCard;
