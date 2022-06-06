import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { selectProfile } from '@/app/store/slices/profile';
import Thread from '@/components/Threads/Thread';
import TopBoard from '@/components/TopBoard';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const dummyThread = [
  {
    who: 'Awanama',
    imgUrl: 'post-1.jpeg',
    date: '31 May 2022 at 2:00 AM',
    id: '4087112',
    subject:
      "Shoujo Shuumatsu Ryokou (Girls' Last Tour) + Tsukumizu Thread #28",
    quote:
      "I feel like I've been burned too many times on things like Berserk and Vagabond, where the author dies or just gets too sick to keep going and the story is left without resolution. Hell, even with things like HxH and Houseki the authors taking extended hiatuses is just so painful. It's starting to feel like it's less worth picking up older continuing series or even newer ones without knowing if things are at least gonna wrap up relatively soon, or at the bare minimum not require another 500 chapters to address plot points. <br /> <br /> Would you rather have shorter stories if it meant you got a guaranteed finished series instead of watching something go on for a thousand chapters only to have it all get cut short by something unexpected?",
    reply: [
      {
        who: 'Awanama',
        date: '31 May 2022 at 2:00 AM',
        id: '4087113',
        imgUrl: 'reply-1.jpeg',
        detail:
          "One thing I realized after last week's watch was that I had gotten it wrong what that one motif in the soundtrack means. It isn't Karen and Hikari's, it's for any promises, which is why you hear it with Futaba and Kaoruko after their revue in the show but you don't hear it in Super Star Spectacle.",
      },
      {
        who: 'Awanama',
        date: '31 May 2022 at 2:00 AM',
        id: '4087114',
        imgUrl: 'reply-2.png',
        detail:
          '<span class="text-teal-200"> >leaving in three hours exactly</span> <br /> You guys enjoy. I&apos;ll be thinking about you tomorrow in the theater.',
      },
      {
        who: 'Awanama',
        date: '31 May 2022 at 2:00 AM',
        id: '4087151',
        imgUrl: 'reply-3.jpeg',
        detail:
          "One thing I realized after last week's watch was that I had gotten it wrong what that one motif in the soundtrack means. It isn't Karen and Hikari's, it's for any promises, which is why you hear it with Futaba and Kaoruko after their revue in the show but you don't hear it in Super Star Spectacle.",
      },
      {
        who: 'Awanama',
        date: '31 May 2022 at 2:00 AM',
        id: '4087143',
        imgUrl: 'reply-4.jpeg',
        detail:
          '<span class="text-teal-200"> >leaving in three hours exactly</span> <br /> You guys enjoy. I&apos;ll be thinking about you tomorrow in the theater.',
      },
      {
        who: 'Awanama',
        date: '31 May 2022 at 2:00 AM',
        id: '4087189',
        imgUrl: 'reply-5.jpeg',
        detail:
          "One thing I realized after last week's watch was that I had gotten it wrong what that one motif in the soundtrack means. It isn't Karen and Hikari's, it's for any promises, which is why you hear it with Futaba and Kaoruko after their revue in the show but you don't hear it in Super Star Spectacle.",
      },
      {
        who: 'Awanama',
        date: '31 May 2022 at 2:00 AM',
        id: '4087998',
        imgUrl: 'reply-6.jpeg',
        detail:
          '<span class="text-teal-200"> >leaving in three hours exactly</span> <br /> You guys enjoy. I&apos;ll be thinking about you tomorrow in the theater.',
      },
      {
        who: 'Awanama',
        date: '31 May 2022 at 2:00 AM',
        id: '4087867',
        imgUrl: 'reply-7.jpeg',
        detail:
          '<span class="text-teal-200"> >leaving in three hours exactly</span> <br /> You guys enjoy. I&apos;ll be thinking about you tomorrow in the theater.',
      },
    ],
  },
  {
    who: 'Awanama',
    imgUrl: 'post-2.jpeg',
    date: '31 May 2022 at 2:00 AM',
    id: '4087123',
    subject: '',
    quote: 'Now thats its over, did you like Oden?',
    reply: [],
  },
];

const Forum = () => {
  const router = useRouter();
  const { id } = router.query;
  const profile = useSelector(selectProfile);

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <TopBoard tag={id} />
      <p>redux data: {profile.name}</p>
      <div className="mt-10 flex w-screen items-center justify-center">
        <div className="w-[1080px]">
          <div
            className="w-full cursor-pointer rounded-lg border-[1px] border-solid border-gray-700 bg-gray-main p-4"
            onClick={() => alert('popup modul!')}
          >
            <h2 className="text-center text-2xl font-bold text-gray-600">
              Start a New Thread
            </h2>
          </div>
        </div>
      </div>
      <section>
        <div className="mt-4 flex w-screen items-center justify-center">
          <div className="w-[1080px]">
            {/* thread */}
            {dummyThread &&
              dummyThread.map((item, index) => {
                return <Thread key={index} dataThread={item} />;
              })}
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Forum;
