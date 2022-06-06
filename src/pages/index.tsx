import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { wrapper } from '@/app/store';
import { selectProfile, setProfileData } from '@/app/store/slices/profile';
import Boards from '@/components/Board';
import Popular from '@/components/Popular';
import WhatIs from '@/components/WhatIs';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();

  return (
    <Main
      meta={
        <Meta
          title="nfsschan"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1 className="hidden">Boilerplate code</h1>
      <p>redux data: {profile.name}</p>
      <button
        onClick={() => dispatch(setProfileData('please be safe!'))}
        type="button"
      >
        click
      </button>
      <WhatIs />
      <div className="mb-10" />
      <Boards />
      <div className="mb-10" />
      <Popular />
      <div className="mb-10" />
    </Main>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(setProfileData('My Server Name'));

    return {
      props: {},
    };
  }
);

export default Index;
