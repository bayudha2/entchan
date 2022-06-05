// @ts-nocheck
import { useRouter } from 'next/router';

import CardItem from '@/components/Cards/CardItem';
import boards from '@/lib/data/boards.json';

const Boards = () => {
  const router = useRouter();
  const { forums } = boards;

  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative w-full max-w-[900px] overflow-hidden rounded-lg border-[1px] border-solid border-gray-700 bg-gray-main p-4 shadow-lg">
        <img
          src={`${router.basePath}/assets/icons/icon-chat-bubble.svg`}
          alt="icon"
          width={50}
          height={50}
          className="pointer-events-none absolute top-3 right-4 opacity-10"
        />
        <h1 className="mb-6 mt-2 text-lg font-extrabold text-[#F3F6F7]">
          Boards
        </h1>

        {forums.map((item, idx) => {
          return (
            <div className="mb-4 flex  w-full" key={idx}>
              <div
                className="flex items-center justify-center rounded-l-lg px-2"
                style={{ backgroundColor: item.bgColor }}
              >
                <h2
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                  }}
                  className="rotate-180 text-center text-sm font-semibold text-white"
                >
                  {item.name}
                </h2>
              </div>
              <div className="flex w-full flex-1 flex-wrap  rounded-r-lg bg-[#191B1E] p-3">
                {item.subItem.map((subItem, subIdx) => {
                  return <CardItem key={subIdx} data={subItem} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Boards;
