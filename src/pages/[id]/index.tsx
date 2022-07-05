import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectProfile } from '@/app/store/slices/profile';
import Pagination from '@/components/Pagination';
import Thread from '@/components/Threads/Thread';
import TopBoard from '@/components/TopBoard';
import { Meta } from '@/layouts/Meta';
import exThreads from '@/lib/data/ex-thread.json';
import { Main } from '@/templates/Main';

const Forum = () => {
  const [items, setItems] = useState<any[]>([]);

  const router = useRouter();
  const { id } = router.query;
  const profile = useSelector(selectProfile);

  useEffect(() => {
    setItems(exThreads['threads-sample']);
  }, []);

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <TopBoard tag={id} />
      <p>redux data: {profile.name}</p>
      <div className="mt-10 flex w-screen items-center justify-center">
        <div className="w-[1080px]">
          <div
            className="w-full cursor-pointer rounded-lg border-[1px] border-solid border-gray-700 bg-gray-main p-4"
            onClick={() => alert('popup modul!')}
          >
            <h2 className="text-center text-2xl font-bold text-gray-600">
              Start a New Thread {exThreads['threads-sample'].length}
            </h2>
          </div>
        </div>
      </div>
      <section className="mb-20">
        <div className="mt-4 flex w-screen items-center justify-center">
          <div className="w-[1080px]">
            {/* thread */}
            {items &&
              items.map((item: any, index: number) => {
                return <Thread key={index} dataThread={item} />;
              })}
            <Pagination items={items} setItems={setItems} />
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Forum;
