import { render, screen } from '@testing-library/react';

import Board from '.';

describe('Board component', () => {
  describe('Render Board', () => {
    it('should render Board correctly', () => {
      render(<Board />);

      const titleElement = screen.getByText(/Popkultur/i);
      expect(titleElement).toBeInTheDocument();
    });
  });
});
