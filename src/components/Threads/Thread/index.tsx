import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import ThreadReply from '../ThreadReply';

type DataThreadType = {
  who: string;
  imgUrl: string;
  date: string;
  id: string;
  subject: string;
  quote: string;
  reply: {
    who: string;
    date: string;
    id: string;
    imgUrl: string;
    detail: string;
  }[];
};

const Thread = ({
  dataThread,
}: {
  dataThread: DataThreadType;
}): JSX.Element => {
  const router = useRouter();
  const [scale, setScale] = useState(true);

  const searchThreadAdd = (e: any): void => {
    const getId = e.target.innerText.replace('>>', '') as string;
    const whichThread = document.getElementById(getId) as HTMLElement;
    if (!whichThread) return;
    whichThread.classList.remove('bg-[#313037]');
    whichThread.classList.add('bg-[#4b2750]');
  };

  const searchThreadRemove = (e: any): void => {
    const getId = e.target.innerText.replace('>>', '') as string;
    const whichThread = document.getElementById(getId) as HTMLElement;
    if (!whichThread) return;
    whichThread.classList.remove('bg-[#4b2750]');
    whichThread.classList.add('bg-[#313037]');
  };

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
            <p className="text-sm text-gray-600">
              <span className="mr-1 text-base font-bold text-[#67bedd]">
                {dataThread.who}
              </span>
              | {dataThread.date}
            </p>
            <div className="flex">
              <p className="m-0 mr-1 cursor-pointer text-[10px] font-semibold text-gray-600 hover:text-gray-500">
                No.{dataThread.id}
              </p>
              {dataThread.reply &&
                dataThread.reply.map((item) => {
                  return (
                    <Link href={`#${item.id}`} key={item.id}>
                      <a
                        className="m-0 mr-1 cursor-pointer px-1 text-[10px] font-semibold text-yellow-300 no-underline hover:text-yellow-600"
                        onMouseEnter={searchThreadAdd}
                        onMouseLeave={searchThreadRemove}
                      >
                        &gt;&gt;{item.id}
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
            className="mt-1 text-sm text-gray-500"
          >
            <div dangerouslySetInnerHTML={{ __html: dataThread.quote }} />
          </blockquote>
        </div>
      </div>
      {/* ini reply */}
      <div>
        {dataThread &&
          dataThread.reply.slice(0, 6).map((item, index) => {
            return <ThreadReply key={index} reply={item} />;
          })}
      </div>
    </div>
  );
};

export default Thread;
