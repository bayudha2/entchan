import { useRouter } from 'next/router';

type Datatype = {
  tag: string;
  title: string;
  desc: string;
  imgUrl: string;
};

const CardStandard = ({ values }: { values: Datatype }) => {
  const router = useRouter();

  return (
    <div className="h-64 w-full">
      <div className="h-full w-full overflow-hidden rounded-md border border-[#353535] bg-gradient-to-r from-[#262626] to-[#141414]">
        <div className="absolute rounded-br-md rounded-tl-md  bg-gradient-to-r from-cyan-500 to-blue-500  bg-clip-padding px-2">
          <p className="text-[10px] font-semibold text-white">{values.tag}</p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={`${router.basePath}/assets/popular/${values.imgUrl}`}
            className="max-h-[152px]"
            alt="img"
          />
        </div>
        <div className=" p-2">
          <p className="text-xs text-gray-500">
            {values.title && (
              <>
                <b className="text-gray-400">{values.title} : </b> <br />
              </>
            )}
            {values.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardStandard;
