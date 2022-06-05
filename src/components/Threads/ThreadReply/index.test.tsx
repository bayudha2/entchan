import { fireEvent, render, screen } from '@testing-library/react';

import ThreadReply from '.';

const propDummy = {
  who: 'Awanama',
  date: 'sabtu wage',
  id: '71239878',
  imgUrl: 'reply-1.jpeg',
  detail:
    '<span class="text-teal-200"> >leaving in three hours exactly</span> <br /> You guys enjoy. I&apos;ll be thinking about you tomorrow in the theater.',
};

describe('ThreadReply component', () => {
  describe('Render reply thread section', () => {
    it('should show multiple element', () => {
      render(<ThreadReply reply={propDummy} />);

      const spanElement = screen.getByTestId('blockquote');
      const imgElement = screen.getByRole('img');
      expect(spanElement).toBeInTheDocument();
      expect(imgElement).toBeInTheDocument();

      fireEvent.click(imgElement);
      expect(imgElement).toBeInTheDocument();
    });
  });
});
