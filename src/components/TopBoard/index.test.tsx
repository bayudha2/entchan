import { fireEvent, render, screen } from '@testing-library/react';

import TopBoard from '.';

const id: string = 'wibu';

describe('TopBoard component', () => {
  describe('Render hero thread', () => {
    it('should show multiple element', () => {
      render(<TopBoard tag={id} />);
      const totalThread = screen.getByText('Total:');
      expect(totalThread).toBeInTheDocument();
    });

    it('should hide blotter when click hide', () => {
      render(<TopBoard tag={id} />);

      const tableBlotter = screen.getByRole('table', {
        name: /table blotter/i,
      });
      const btnHide = screen.getByText(/hide/i);
      expect(btnHide).toBeInTheDocument();
      expect(tableBlotter).toBeInTheDocument();

      fireEvent.click(btnHide);
      expect(tableBlotter).not.toBeInTheDocument();
    });
  });
});
