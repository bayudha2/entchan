import { render, screen } from '@testing-library/react';

import Popular from '.';

describe('Popular component', () => {
  describe('Render Popular', () => {
    it('should render card correctly', () => {
      render(<Popular />);

      const titleElement = screen.getByRole('heading', {
        name: /Popular Threads/i,
      });
      expect(titleElement).toBeInTheDocument();
    });
  });
});
