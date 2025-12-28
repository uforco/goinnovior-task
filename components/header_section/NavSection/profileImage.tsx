"use client";

import Image from "next/image";

const ProfileImage = ({ url }: { url: string }) => {
  return (
    <div className=" flex justify-center size-8 items-center rounded-full overflow-hidden " >
      <Image className=" object-cover " width={100} height={100} src={url} alt="Profile"></Image>{" "}
    </div>
  );
};

export default ProfileImage;
