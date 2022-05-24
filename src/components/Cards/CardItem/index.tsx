// @ts-nocheck
import { useRouter } from 'next/router';
import Tilt from 'react-tilt';

const CardItem = ({ data }) => {
  const { imgUrl, name } = data;
  const router = useRouter();
  return (
    <div className="mx-3 mb-4 max-h-14">
      <Tilt
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="Tilt -300 relative m-3 w-full cursor-pointer overflow-hidden rounded-lg p-3"
        style={{ flex: '1 0 21%' }}
        options={{ max: 25, scale: 1, reverse: true }}
      >
        <img
          className="absolute top-0 left-0 opacity-40"
          src={`${router.basePath}/assets/images/${imgUrl}`}
          alt="background"
        />
        <div className="relative z-20 flex items-center justify-center">
          <p className="text-sm font-semibold text-white">{name}</p>
        </div>
      </Tilt>
    </div>
  );
};

export default CardItem;
