import { useRouter } from 'next/router';
import { useState } from 'react';

type ReplyType = {
  who: string;
  date: string;
  id: string;
  imgUrl: string;
  detail: string;
};

const ThreadReply = ({ reply }: { reply: ReplyType }): JSX.Element => {
  const router = useRouter();
  const [scale2, setScale2] = useState(true);

  return (
    <div className="mt-4 rounded-md bg-[#313037] p-2">
      <p className="text-sm text-gray-600">
        <span className="mr-1 text-base font-bold text-[#67bedd]">
          {reply.who}
        </span>
        | {reply.date}
      </p>
      <div className="flex">
        <p className="m-0 cursor-pointer text-[10px] font-semibold text-gray-600 hover:text-gray-500">
          No.{reply.id}
        </p>
      </div>

      <div className={`${scale2 ? 'flex' : ''} mt-2`}>
        <figure
          className="cursor-pointer"
          style={{ maxWidth: `${scale2 ? '150px' : '100%'}` }}
          onClick={() => setScale2(!scale2)}
        >
          <img
            src={`${router.basePath}/assets/images/bg-forum/${reply.imgUrl}`}
            alt="post-1"
          />
        </figure>
        <blockquote
          className={`${scale2 ? 'ml-4' : 'mt-4'} text-sm text-gray-500`}
          data-testid="blockquote"
        >
          <div dangerouslySetInnerHTML={{ __html: reply.detail }} />
        </blockquote>
      </div>
    </div>
  );
};

export default ThreadReply;
