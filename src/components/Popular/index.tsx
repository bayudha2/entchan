// @ts-nocheck
import { useRouter } from 'next/router';

import popularData from '@/lib/data/popularData.json';

import CardStandard from '../Cards/CardStandard';

const Popular = () => {
  const router = useRouter();

  const { threads } = popularData;

  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative w-full max-w-[900px] overflow-hidden rounded-lg border-[1px] border-solid border-gray-700 bg-gray-main p-4 shadow-lg">
        <img
          src={`${router.basePath}/assets/icons/icon-favorites.svg`}
          alt="icon"
          width={50}
          height={50}
          className="pointer-events-none absolute top-3 right-4 opacity-10"
        />
        <h1 className="mb-6 mt-2 text-lg font-extrabold text-[#F3F6F7]">
          Popular Threads
        </h1>

        <div className="grid w-full grid-cols-4 gap-4">
          {threads.map((item, idx) => {
            return <CardStandard key={idx} values={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular;
