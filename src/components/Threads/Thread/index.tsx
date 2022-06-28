import { Popover } from '@headlessui/react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  DotsVerticalIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { searchThread, searchThreadRemove } from '@/lib/helpers/searchThread';

import ThreadReply from '../ThreadReply';

type ReplyType = {
  who: string;
  date: string;
  id: string;
  imgUrl: string;
  detail: string;
}[];

type DataThreadType = {
  who: string;
  imgUrl: string;
  date: string;
  id: string;
  subject: string;
  quote: string;
  reply: ReplyType;
  repliedToThis: string[];
};

const Thread = ({
  dataThread,
}: {
  dataThread: DataThreadType;
}): JSX.Element => {
  const router = useRouter();
  const [scale, setScale] = useState(true);
  const [imageCount, setImageCount] = useState<ReplyType>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const newReply = [...dataThread.reply].splice(6);
    const imgCount = newReply.filter((item) => item.imgUrl !== '');
    setImageCount(imgCount);
  }, [dataThread]);

  return (
    <div
      className={`w-full rounded-lg bg-[#282a2e] p-4 mb-8`}
      id={dataThread.id}
    >
      <div className={`${scale ? 'flex' : ''}`}>
        <figure
          className="cursor-pointer"
          style={{ maxWidth: `${scale ? '240px' : '100%'}` }}
          onClick={() => setScale(!scale)}
        >
          <img
            src={`${router.basePath}/assets/images/bg-forum/${dataThread.imgUrl}`}
            aria-label={dataThread.imgUrl}
            alt="post-1"
          />
        </figure>
        <div className={`${scale ? 'ml-4' : 'mt-4'} w-full`}>
          <div className="bg-[#3f4b49] p-2">
            <div className="flex justify-between">
              <p className="text-sm text-gray-600">
                <span className="mr-1 text-base font-bold text-[#67bedd]">
                  {dataThread.who}
                </span>
                | {dataThread.date}
              </p>
              <Popover className="relative">
                <Popover.Button>
                  <DotsVerticalIcon className="h-5 w-5 cursor-pointer text-teal-600" />
                </Popover.Button>

                <Popover.Panel className="absolute z-10">
                  <div className="flex min-w-max flex-col rounded bg-indigo-100">
                    <p className="m-0 cursor-pointer border-b-[1px] border-solid border-gray-400 p-2 text-xs font-normal hover:rounded hover:bg-indigo-200">
                      Report Post
                    </p>
                    <p className="m-0 cursor-pointer border-b-[1px] border-solid border-gray-400 p-2 text-xs font-normal hover:rounded hover:bg-indigo-200">
                      Hide Thread
                    </p>
                    {dataThread.imgUrl && (
                      <p className=" m-0 cursor-pointer p-2 text-xs font-normal hover:rounded hover:bg-indigo-200">
                        Image Search
                      </p>
                    )}
                  </div>
                </Popover.Panel>
              </Popover>
            </div>
            <div className="flex">
              <p className="m-0 mr-1 cursor-pointer text-[10px] font-semibold text-gray-600 hover:text-gray-500">
                No.{dataThread.id}
              </p>
              {dataThread.reply &&
                dataThread.repliedToThis.map((item) => {
                  return (
                    <Link href={`#${item}`} key={item}>
                      <a
                        className="m-0 mr-1 cursor-pointer px-1 text-[10px] font-semibold text-yellow-300 no-underline hover:text-yellow-600"
                        onMouseEnter={searchThread}
                        onMouseLeave={searchThreadRemove}
                      >
                        &gt;&gt;{item}
                      </a>
                    </Link>
                  );
                })}
            </div>
            <p className="text-sm font-bold text-[#c4dd67]">
              {dataThread.subject}
            </p>
          </div>
          <blockquote
            data-testid="blockquote-thread"
            className="mt-1 text-[13px] text-gray-500"
          >
            <div dangerouslySetInnerHTML={{ __html: dataThread.quote }} />
          </blockquote>
        </div>
      </div>
      {dataThread && dataThread.reply.length > 6 && (
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {showAll ? (
              <ChevronUpIcon
                onClick={() => setShowAll(false)}
                className="h-5 w-5 cursor-pointer text-teal-600"
              />
            ) : (
              <ChevronDownIcon
                onClick={() => setShowAll(true)}
                className="h-5 w-5 cursor-pointer text-teal-600"
              />
            )}
            <div className="inline-block rounded bg-teal-800 px-3 text-emerald-200">
              {showAll ? (
                <p className="text-xs">Showing all replies</p>
              ) : (
                <p className="text-xs">
                  {dataThread.reply.length - 6} replies and {imageCount.length}{' '}
                  image omitted. Click{' '}
                  <span className="cursor-pointer text-amber-400">here</span> to
                  view.
                </p>
              )}
            </div>
          </div>
          <div className="inline-block cursor-pointer rounded bg-teal-800 px-3 text-emerald-200">
            <p className="text-xs">Reply</p>
          </div>
        </div>
      )}
      {/* ini reply */}
      <div>
        {dataThread && showAll
          ? dataThread.reply.map((item, index) => {
              return <ThreadReply key={index} reply={item} />;
            })
          : dataThread.reply.slice(0, 6).map((item, index) => {
              return <ThreadReply key={index} reply={item} />;
            })}
      </div>
    </div>
  );
};

export default Thread;
