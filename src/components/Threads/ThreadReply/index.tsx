// import { EditorContent, useEditor } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import { useAppDispatch } from '@/app/hooks';
import { getThreadDetail, setShown } from '@/app/store/slices/thread';
// import { handleQuoteFormat } from '@/lib/helpers/threadFormatHandler';

type ReplyType = {
  who: string;
  date: string;
  id: string;
  imgUrl: string;
  detail: string;
};

const ThreadReply = ({ reply }: { reply: ReplyType }): JSX.Element => {
  const ref = useRef<any>();
  const router = useRouter();
  const [scale2, setScale2] = useState(true);
  const dispatch = useAppDispatch();

  function giveListenerToThread(e: React.MouseEvent<HTMLInputElement>) {
    e.preventDefault();
    const targetLink = e.target as Element;
    targetLink.querySelectorAll('.nrep').forEach((item) => {
      // const elem = item as HTMLElement;
      // const threadId = elem.innerText.replace(/^[>]{2}/, '');
      item.addEventListener('mouseenter', async () => {
        // do request to thread
        // const response = await axios.get(`https://catfact.ninja/fact`);
        // end request
        dispatch(getThreadDetail());
        dispatch(setShown({ payload: true }));
      });

      item.addEventListener('mouseleave', () => {
        // do request to thread
        // end request
        dispatch(setShown({ payload: false }));
      });
    });
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('mouseenter', giveListenerToThread, {
        once: true,
      });
    }
  }, []);

  // const editor = useEditor({
  //   extensions: [
  //     StarterKit.configure({
  //       heading: {
  //         levels: [1, 2, 3],
  //       },
  //     }),
  //   ],
  //   content: '<p>Hello World!</p>',
  // });

  function handleThreadClick(e: React.MouseEvent<HTMLInputElement>) {
    e.preventDefault();
    const targetLink = e.target as Element;
    console.log('e', targetLink.closest('a'));
  }

  // function quoteFormat(): void {
  //   const textData: string | undefined = editor?.getHTML();
  //   handleQuoteFormat(textData);
  // }

  return (
    <div
      className="mt-4 scroll-mt-32 rounded-md bg-[#313037] p-2"
      id={reply.id}
    >
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
      {/* <EditorContent editor={editor} />
      <button onClick={quoteFormat}>cek</button>
      <button onClick={() => editor?.chain().toggleBold().run()}>Bold</button> */}
      <div className={`${scale2 ? 'flex' : ''} mt-2`}>
        {reply.imgUrl && (
          <figure
            className="cursor-pointer"
            style={{ maxWidth: `${scale2 ? '100px' : '100%'}` }}
            onClick={() => setScale2(!scale2)}
          >
            <img
              src={`${router.basePath}/assets/images/bg-forum/${reply.imgUrl}`}
              alt="post-1"
            />
          </figure>
        )}
        <blockquote
          className={`${scale2 ? 'ml-4' : 'mt-4'} text-[13px] text-gray-500`}
          data-testid="blockquote"
        >
          <div
            onClick={handleThreadClick}
            ref={ref}
            dangerouslySetInnerHTML={{
              __html: reply.detail,
            }}
          />
        </blockquote>
      </div>
    </div>
  );
};

export default ThreadReply;
