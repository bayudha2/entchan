import { render, screen } from '@testing-library/react';

import CardItem from '.';

const data = {
  name: 'sub kultur',
  imgUrl: 'popculture.webp',
  short: '/wibu',
};

describe('CardItem component', () => {
  describe('Render cardItem', () => {
    it('should render card correctly', () => {
      render(<CardItem data={data} />);

      const titleElement = screen.getByText(/sub kultur/i);
      expect(titleElement).toBeInTheDocument();
    });
  });
});
