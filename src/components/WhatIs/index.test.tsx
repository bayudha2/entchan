import { render, screen } from '@testing-library/react';

import WhatIs from '.';

describe('WhatIs component', () => {
  describe('Render card', () => {
    it('should a page title', () => {
      render(<WhatIs />);

      const headerElement = screen.getByText('What is nfsschan ?');
      expect(headerElement).toBeInTheDocument();
    });
  });
});
