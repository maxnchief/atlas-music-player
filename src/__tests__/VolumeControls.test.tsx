import { render, fireEvent } from '@testing-library/react';
import VolumeControls from '../components/VolumeControls';
import React from 'react';

describe('VolumeControls', () => {
  it('renders with default volume', () => {
    const { asFragment } = render(<VolumeControls volume={60} setVolume={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with volume at 0', () => {
    const { asFragment } = render(<VolumeControls volume={0} setVolume={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with volume at 100', () => {
    const { asFragment } = render(<VolumeControls volume={100} setVolume={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls setVolume on change', () => {
    const setVolume = jest.fn();
    const { getByRole } = render(<VolumeControls volume={50} setVolume={setVolume} />);
    fireEvent.change(getByRole('slider'), { target: { value: '80' } });
    expect(setVolume).toHaveBeenCalledWith(80);
  });
});
