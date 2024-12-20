import React from "react";
import Image from "next/Image";
import Avatar from "./Avatar";

const AuthorMeta = ({
  meta,
  hiddenAvatar = false,
  avatarSize = "h-7 w-7 text-sm",
}) => {
  const { date, author_image, author } = meta;

  return (
    <div className={`inline-flex flex-wrap items-center`}>
      <div className="flex items-center">
        <Image
          src={author_image}
          alt=""
          height={"40px"}
          width="40px"
          className="w-10 h-10 object-cover rounded-full sm:block"
        />

        <h3 className="ml-4 text-gray-700 font-bold">{author}</h3>
      </div>
      <>
        <span className="mx-[6px] font-medium text-neutral-500 dark:text-neutral-400">
          ·
        </span>
        <span className="font-normal text-neutral-500 dark:text-neutral-400">
          {date}
        </span>
      </>
    </div>
  );
};

export default AuthorMeta;
