import { Menu } from '@headlessui/react';
import Link from 'next/link';

const Dropdown = ({ item }: { item: any }) => {
  return (
    <Menu>
      <Menu.Button className="text-base font-semibold text-gray-600">
        {item.name}
      </Menu.Button>
      <div className="relative">
        <Menu.Items className="absolute top-0 flex w-24 flex-col rounded-md bg-gray-800 ">
          {item.subItem.map((sub: any, index: number) => {
            return (
              <Menu.Item key={index}>
                <Link href={sub.short}>
                  <a className="border-none p-2 text-center text-base text-gray-500 hover:text-gray-900">
                    {sub.short}
                  </a>
                </Link>
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default Dropdown;
