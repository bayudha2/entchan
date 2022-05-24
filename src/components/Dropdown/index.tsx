// @ts-nocheck
import { createPopper } from '@popperjs/core';
import { createRef, useState } from 'react';

const Dropdown = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === 'white'
    ? (bgColor = 'bg-slate-700')
    : (bgColor = `bg-${color}-500`);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 sm:w-6/12 md:w-4/12">
          <div className="relative inline-flex w-full align-middle">
            <button
              className={`text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${bgColor}`}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              {color === 'white' ? 'White Dropdown' : `${color} Dropdown`}
            </button>
            <div
              ref={popoverDropdownRef}
              className={`${
                (dropdownPopoverShow ? 'block ' : 'hidden ') +
                (color === 'white' ? 'bg-white ' : `${bgColor} `)
              }text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1`}
              style={{ minWidth: '12rem' }}
            >
              <a
                href="#pablo"
                className={`text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent ${
                  color === 'white' ? ' text-slate-700' : 'text-white'
                }`}
                onClick={(e) => e.preventDefault()}
              >
                Action
              </a>
              <a
                href="#pablo"
                className={`text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent ${
                  color === 'white' ? ' text-slate-700' : 'text-white'
                }`}
                onClick={(e) => e.preventDefault()}
              >
                Another action
              </a>
              <a
                href="#pablo"
                className={`text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent ${
                  color === 'white' ? ' text-slate-700' : 'text-white'
                }`}
                onClick={(e) => e.preventDefault()}
              >
                Something else here
              </a>
              <div className="my-2 h-0 border border-t-0 border-solid border-slate-800 opacity-25" />
              <a
                href="#pablo"
                className={`text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent ${
                  color === 'white' ? ' text-slate-700' : 'text-white'
                }`}
                onClick={(e) => e.preventDefault()}
              >
                Seprated link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
