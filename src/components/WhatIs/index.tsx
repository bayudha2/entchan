import { useRouter } from 'next/router';

const WhatIs = () => {
  const router = useRouter();
  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative max-w-[900px] overflow-hidden rounded-lg border-[1px] border-solid border-gray-700 bg-gray-main p-4 shadow-lg">
        <img
          src={`${router.basePath}/assets/icons/icon-info.svg`}
          alt="icon"
          width={40}
          height={40}
          className="pointer-events-none absolute top-3 right-4 opacity-10"
        />
        <h1 className="text-lg font-extrabold text-[#F3F6F7]">
          What is nfsschan ?
        </h1>
        <p className="m-0 mt-4 text-xs text-[#8E8F91]">
          nfsschan is a simple image-based bulletin board where anyone can post
          comments and share images. There are boards dedicated to a variety of
          topics, from Japanese animation and culture to videogames, music, and
          photography. Users do not need to register an account before
          participating in the community. Feel free to click on a board below
          that interests you and jump right in!
          <br />
          <br />
          Be sure to familiarize yourself with the Rules before posting, and
          read the FAQ if you wish to learn more about how to use the site.
        </p>
      </div>
    </div>
  );
};

export default WhatIs;
