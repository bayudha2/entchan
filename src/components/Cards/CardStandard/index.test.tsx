import { render, screen } from '@testing-library/react';

import CardStandard from '.';

const dummyData = {
  tag: 'Retro Games',
  title: 'Elite Dangerous Thread',
  desc: 'Finally got into this. Where is everyone?',
  imgUrl: 'pop4.png',
};

describe('CardStandard component', () => {
  describe('Render CardStandard', () => {
    it('should render card with given props correctly', () => {
      render(<CardStandard values={dummyData} />);

      const tagElement = screen.getByText(/retro games/i);
      const titleElement = screen.getByText(/Elite Dangerous Thread/i);
      const descElement = screen.getByText(
        /Finally got into this. Where is everyone/i
      );
      expect(tagElement).toBeInTheDocument();
      expect(titleElement).toBeInTheDocument();
      expect(descElement).toBeInTheDocument();
    });
  });
});
