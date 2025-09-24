import { render } from '@testing-library/react';
import CoverArt from '../components/CoverArt';
import React from 'react';

describe('CoverArt', () => {
  it('renders with a valid songId', () => {
    const { asFragment } = render(<CoverArt songId="test-id" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with an empty songId', () => {
    const { asFragment } = render(<CoverArt songId="" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
