import Link from 'next/link';
import type { ReactNode } from 'react';

import Dropdown from '@/components/Dropdown';
import SearchNav from '@/components/Searchs/SearchNav';
import boards from '@/lib/data/boards.json';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const { forums } = boards;
  return (
    <div className=" w-full px-1 text-gray-700 antialiased">
      {props.meta}
      <div className="mx-auto">
        <div className="fixed top-0 left-0 z-30 w-full bg-[#292d33] p-2 py-3">
          <div className="flex flex-wrap items-center">
            {/* input */}
            <div className="my-auto flex-1">
              <SearchNav />
            </div>
            {/* nav */}
            <div className="flex flex-1 items-center justify-center">
              <ul className="flex  flex-wrap text-xl">
                {forums &&
                  forums.map((item, idx) => {
                    return (
                      <li className="mr-6" key={idx}>
                        <Dropdown item={item} />
                      </li>
                    );
                  })}
              </ul>
            </div>
            {/* option */}
            <div className="my-auto flex flex-1 items-center justify-center">
              <div className="mr-4">
                <p className="cursor-pointer border-none text-center text-gray-600">
                  Settings
                </p>
              </div>
              <div>
                <Link href="/">
                  <a className="border-none text-center text-gray-600">Home</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-14" />

        <div className="contents py-5 text-xl">{props.children}</div>

        <div className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
          <span role="img" aria-label="Love">
            ♥
          </span>{' '}
          by <a href="https://creativedesignsguru.com">Awanama</a>
          {/*
           * PLEASE READ THIS SECTION
           * We'll really appreciate if you could have a link to our website
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * Thank you for your support it'll mean a lot for us.
           */}
        </div>
      </div>
    </div>
  );
};

export { Main };
