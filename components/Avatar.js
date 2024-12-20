import React from "react";
import Image from "next/Image";
import { avatarColors } from "@/utils/index";

const _setBgColor = (name) => {
  const backgroundIndex = Math.floor(name.charCodeAt(0) % avatarColors.length);
  return avatarColors[backgroundIndex];
};

const Avatar = ({
  containerClassName = "ring-1 ring-white dark:ring-neutral-900",
  sizeClass = "h-6 w-6 text-sm",
  radius = "rounded-full",
  imgUrl,
  userName,
}) => {
  const name = userName || "John Doe";

  const url = imgUrl || null;

  return (
    <div
      className={`wil-avatar relative inline-flex flex-shrink-0 items-center justify-center overflow-hidden font-semibold uppercase text-neutral-100 shadow-inner ${radius} ${sizeClass} ${containerClassName}`}
      style={{ backgroundColor: url ? undefined : _setBgColor(name) }}
    >
      {url && (
        <Image
          fill
          sizes="100px"
          className="absolute inset-0 h-full w-full object-cover"
          src={url}
          alt={name}
          layout="fill"
        />
      )}
      <span className="wil-avatar__name">{name[0]}</span>
    </div>
  );
};

export default Avatar;
