import React from "react";
import Image from "next/image";

export interface IAvatar {
  src: string;
  alt: string;
}

function Avatar({ src, alt }: IAvatar) {
  return (
    <div className="p-1">
      <Image
        className="rounded-full h-8 w-8 ring-2 ring-light"
        src={src}
        width={60}
        height={60}
        alt={alt}
      />
    </div>
  );
}

export { Avatar };
