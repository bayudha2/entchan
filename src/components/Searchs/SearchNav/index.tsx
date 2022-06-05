import { useRouter } from 'next/router';
import { useRef } from 'react';

import boards from '@/lib/data/boards.json';

const SearchNav = () => {
  const { forumSubItems } = boards;
  const router = useRouter();
  const dropTags = useRef() as React.RefObject<HTMLSelectElement>;

  // function handleSearch() {}

  return (
    <div className="relative w-96 ">
      <input
        type="text"
        className="w-full rounded-md bg-[#141619] px-2 py-1 pl-24  text-sm text-white  placeholder:text-sm placeholder:text-gray-600"
        placeholder="Search"
        // onKeyPress={handleSearch}
      />
      <select
        ref={dropTags}
        data-testid="select"
        className="absolute top-0 left-0 block rounded-l-md border border-gray-300 bg-gray-50 p-1 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400"
      >
        {forumSubItems.map((item, idx) => (
          <option key={idx} value={item} data-testid="select-option">
            /{item}
          </option>
        ))}
      </select>
      <img
        src={`${router.basePath}/assets/icons/icon-search.svg`}
        alt="icon-search"
        className="absolute right-3 top-1"
        width={20}
        height={20}
      />
    </div>
  );
};

export default SearchNav;
