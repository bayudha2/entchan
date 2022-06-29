import { Popover } from '@headlessui/react';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import type { Dispatch, SetStateAction } from 'react';

const PopoverComp = ({
  imgUrl,
  // id,
  setHideThread,
  hideThread,
}: {
  imgUrl: string;
  id: string;
  setHideThread: Dispatch<SetStateAction<boolean>>;
  hideThread: boolean;
}): JSX.Element => {
  function setDisplayThread(): void {
    setHideThread(!hideThread);
  }
  return (
    <div>
      <Popover className="relative">
        <Popover.Button>
          <DotsVerticalIcon className="h-5 w-5 cursor-pointer text-teal-600" />
        </Popover.Button>

        <Popover.Panel className="absolute z-10">
          <div className="flex min-w-max flex-col rounded bg-indigo-100">
            <p className="m-0 cursor-pointer border-b-[1px] border-solid border-gray-400 p-2 text-xs font-normal hover:rounded hover:bg-indigo-200">
              Report Post
            </p>
            <p
              className={`m-0 cursor-pointer p-2 text-xs font-normal hover:rounded hover:bg-indigo-200 ${
                imgUrl ? 'border-b-[1px] border-solid border-gray-400' : ''
              }`}
              onClick={setDisplayThread}
            >
              {hideThread ? 'Unhide' : 'Hide'} Thread
            </p>
            {imgUrl && (
              <p className=" m-0 cursor-pointer p-2 text-xs font-normal hover:rounded hover:bg-indigo-200">
                Image Search
              </p>
            )}
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
};

export default PopoverComp;
