import { render } from '@testing-library/react';
import SongTitle from '../components/SongTitle';
import React from 'react';

describe('SongTitle', () => {
  it('renders with a valid songId', () => {
    const { asFragment } = render(<SongTitle songId="test-id" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with an empty songId', () => {
    const { asFragment } = render(<SongTitle songId="" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
