import Boards from '@/components/Board';
import Popular from '@/components/Popular';
import WhatIs from '@/components/WhatIs';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();

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
      <WhatIs />
      <div className="mb-10" />
      <Boards />
      <div className="mb-10" />
      <Popular />
      <div className="mb-10" />
    </Main>
  );
};

export default Index;
