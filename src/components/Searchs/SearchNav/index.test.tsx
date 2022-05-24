import { fireEvent, render, screen } from '@testing-library/react';

import SearchNav from '.';

describe('search navigation component', () => {
  describe('Render search navigation', () => {
    it('should render search correctly', () => {
      render(<SearchNav />);

      const placeholderInputElement = screen.getByPlaceholderText(
        /search/i
      ) as HTMLInputElement;
      fireEvent.change(placeholderInputElement, {
        target: { value: 'adois amigo' },
      });

      fireEvent.click(placeholderInputElement);
      fireEvent.keyPress(placeholderInputElement, { key: 'Enter', code: 13 });

      expect(placeholderInputElement).toBeInTheDocument();
      expect(placeholderInputElement.value).toBe('adois amigo');
    });

    it('should have 21 option', () => {
      render(<SearchNav />);

      const optionElement = screen.getByRole('option', {
        name: '/wibu',
      }) as HTMLOptionElement;

      expect(optionElement.selected).toBe(true);
      expect(screen.getAllByRole('option').length).toBe(21);
    });
  });
});
