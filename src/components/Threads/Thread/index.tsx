import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import PopoverComp from '@/components/Popover';
import { searchThread, searchThreadRemove } from '@/lib/helpers/searchThread';

import ThreadReply from '../ThreadReply';

type ReplyType = {
  who: string;
  date: string;
  id: string;
  imgUrl: string;
  repliedToThis: string[];
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
  const ref = useRef<any>();
  const [scale, setScale] = useState(true);
  const [imageCount, setImageCount] = useState<ReplyType>([]);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [hideThread, setHideThread] = useState<boolean>(false);

  useEffect(() => {
    const newReply = [...dataThread.reply].splice(6);
    const imgCount = newReply.filter((item) => item.imgUrl !== '');
    setImageCount(imgCount);
  }, [dataThread]);

  function giveListenerToThread(e: React.MouseEvent<HTMLInputElement>) {
    e.preventDefault();
    const targetLink = e.target as Element;
    targetLink.querySelectorAll('.nrep').forEach((item) => {
      item.addEventListener('mouseenter', searchThread);

      item.addEventListener('mouseleave', searchThreadRemove);
    });
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('mouseenter', giveListenerToThread, {
        once: true,
      });
    }
  }, [hideThread]);

  function handleThreadClick(e: React.MouseEvent<HTMLInputElement>) {
    e.preventDefault();
    const targetLink = e.target as Element;
    console.log('e', targetLink.closest('a'));
  }

  return (
    <div
      className={`w-full rounded-lg bg-[#282a2e] p-4 mb-8`}
      id={dataThread.id}
    >
      {hideThread ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="max-w-lg truncate text-sm font-bold text-[#c4dd67]">
              {dataThread.subject}
            </p>
            <p className="text-sm text-gray-600">
              <span className="mr-1 text-base font-bold text-[#67bedd]">
                {dataThread.who}
              </span>
              | {dataThread.date}
            </p>
            <p className="m-0 mr-1 cursor-pointer text-sm font-semibold text-gray-600 hover:text-gray-500">
              No.{dataThread.id.replace('t_', '')}
            </p>
          </div>
          <PopoverComp
            setHideThread={setHideThread}
            hideThread={hideThread}
            id={dataThread.id}
            imgUrl={dataThread.imgUrl}
          />
        </div>
      ) : (
        <>
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
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    <span className="mr-1 text-base font-bold text-[#67bedd]">
                      {dataThread.who}
                    </span>
                    | {dataThread.date}
                  </p>
                  <PopoverComp
                    setHideThread={setHideThread}
                    hideThread={hideThread}
                    id={dataThread.id}
                    imgUrl={dataThread.imgUrl}
                  />
                </div>
                <div className="flex">
                  <p className="m-0 mr-1 cursor-pointer text-[10px] font-semibold text-gray-600 hover:text-gray-500">
                    No.{dataThread.id.replace('t_', '')}
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
                <div
                  onClick={handleThreadClick}
                  ref={ref}
                  dangerouslySetInnerHTML={{ __html: dataThread.quote }}
                />
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
                      {dataThread.reply.length - 6} replies and{' '}
                      {imageCount.length} image omitted. Click{' '}
                      <span className="cursor-pointer text-amber-400">
                        here
                      </span>{' '}
                      to view.
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
        </>
      )}
    </div>
  );
};

export default Thread;
