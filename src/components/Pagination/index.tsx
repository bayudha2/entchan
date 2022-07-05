import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

import exThreads from '@/lib/data/ex-thread.json';

export default function Pagination({
  setItems,
  items,
}: {
  setItems: Dispatch<SetStateAction<any[]>>;
  items: any[];
}) {
  const [prevDisable, setPrevDisable] = useState<boolean>(true);
  const [nextDisable, setNextDisable] = useState<boolean>(false);

  function handlePageClick({ selected }: { selected: number }) {
    setPrevDisable(false);
    setNextDisable(false);
    if (selected < 1) setPrevDisable(true);
    if (selected > 8) setNextDisable(true);
    setItems(exThreads['threads-sample-two']);
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <button className="rounded bg-teal-600 p-2 text-sm font-semibold text-gray-400">
          Catalog
        </button>
        <button className="rounded bg-teal-600 p-2 text-sm font-semibold text-gray-400">
          Archive
        </button>
      </div>
      <ReactPaginate
        previousLabel={
          <div
            className={`flex items-center gap-1 text-xs text-teal-${
              prevDisable ? '800' : '600'
            }`}
          >
            <ChevronLeftIcon
              className={`h-5 w-5 cursor-pointer text-teal-${
                prevDisable ? '800' : '600'
              }`}
            />
            Prev
          </div>
        }
        nextLabel={
          <div
            className={`flex items-center gap-1 text-xs text-teal-${
              nextDisable ? '800' : '600'
            }`}
          >
            Next
            <ChevronRightIcon
              className={`h-5 w-5 cursor-pointer text-teal-${
                nextDisable ? '800' : '600'
              }`}
            />
          </div>
        }
        pageCount={Math.min(10, items.length)}
        pageRangeDisplayed={10}
        onPageChange={handlePageClick}
        containerClassName={'flex items-center gap-3'}
        pageClassName={'text-xs px-3 rounded-sm text-gray-600'}
        activeClassName={'bg-gray-800 font-semibold'}
      />
    </div>
  );
}
