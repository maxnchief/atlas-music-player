import { render } from '@testing-library/react';
import PlayListItem from '../components/PlayListItem';
import React from 'react';

describe('PlayListItem', () => {
  it('renders with all props', () => {
    const { asFragment } = render(
      <PlayListItem title="Song Title" artist="Artist Name" duration="3:45" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with missing artist', () => {
    const { asFragment } = render(
      <PlayListItem title="Song Title" duration="3:45" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with missing duration', () => {
    const { asFragment } = render(
      <PlayListItem title="Song Title" artist="Artist Name" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with only title', () => {
    const { asFragment } = render(
      <PlayListItem title="Song Title" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
