import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const dummyData = {
  totalThread: '123',
  newsBlotter: [
    {
      date: '08/21/20',
      detail: 'New boards added: /vrpg/, /vmg/, /vst/ and /vm/',
    },
    {
      date: '08/21/20',
      detail: 'New trial board added: /bant/ - International/Random',
    },
    {
      date: '10/04/16',
      detail: 'New board for 4chan Pass users: /vip/ - Very Important Posts',
    },
  ],
};

const WhatIs = ({ tag }: { tag: string | string[] | undefined }) => {
  const [showBlotter, setShowBlotter] = useState(true);
  const router = useRouter();
  return (
    <section className="flex w-screen items-center justify-center bg-red-500 bg-gradient-to-t from-[#232428] to-[#3d6068]">
      <div className="max-w-[1080px]">
        <div className="max-h-96 overflow-hidden rounded-b-lg">
          <img
            src={`${router.basePath}/assets/images/bg-forum/bg_tes.jpeg`}
            className="-translate-y-[25%]"
            alt="img"
          />
        </div>
        <div className="flex items-center justify-between py-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-600">
              {`/${tag}/ - Subkultur Prowibu`}
            </h1>
            <p className=" my-1 text-lg font-semibold">
              Total: <span>{dummyData.totalThread} threads</span>
            </p>
            {showBlotter && (
              <table className="table-auto">
                <caption className="hidden">Table blotter</caption>
                <tbody>
                  {dummyData.newsBlotter.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-[10px] text-gray-500">
                          {item.date}
                        </td>
                        <td className="text-[10px] text-gray-500">
                          {item.detail}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
            <div className="flex">
              <p className="m-0 text-[10px] text-gray-500">
                [
                <span
                  className="cursor-pointer text-teal-500"
                  onClick={() => setShowBlotter(!showBlotter)}
                >
                  {showBlotter ? 'Hide' : 'Show Blotter'}
                </span>
                ]&ensp;
              </p>
              {showBlotter && (
                <p className="m-0 text-[10px] text-gray-500">
                  [
                  <Link href="/">
                    <a className="border-none text-[10px] text-teal-500">
                      Show All
                    </a>
                  </Link>
                  ]
                </p>
              )}
            </div>
          </div>
          <div>
            <div className="flex max-h-36 max-w-sm items-center justify-center overflow-hidden">
              <img
                src={`${router.basePath}/assets/images/bg-forum/bg_tes.jpeg`}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
