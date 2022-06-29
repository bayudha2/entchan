import { fireEvent, render, screen } from '@testing-library/react';

import Thread from '.';

const dummyData = {
  who: 'Awanama',
  imgUrl: 'post-2.jpeg',
  date: '31 May 2022 at 2:00 AM',
  id: '4087106',
  subject: '',
  quote: 'Now thats its over, did you like Oden?',
  repliedToThis: ['4087151'],
  reply: [
    {
      who: 'Awanama',
      date: '31 May 2022 at 2:00 AM',
      id: '4087106',
      imgUrl: 'reply-2.png',
      repliedToThis: [],
      detail:
        '<span class="text-teal-200"> >leaving in three hours exactly</span> <br /> You guys enjoy. I&apos;ll be thinking about you tomorrow in the theater.',
    },
  ],
};

describe('Thread component', () => {
  describe('Render thread section', () => {
    it('should show multiple element', () => {
      render(<Thread dataThread={dummyData} />);

      const spanElement = screen.getByTestId('blockquote-thread');
      const imgElement = screen.getByRole('img', { name: dummyData.imgUrl });
      expect(spanElement).toBeInTheDocument();
      expect(imgElement).toBeInTheDocument();

      fireEvent.click(imgElement);
      expect(imgElement).toBeInTheDocument();
    });
  });
});
