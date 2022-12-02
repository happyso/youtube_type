import { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useIsFetching } from '@tanstack/react-query';
import { ReactElement } from 'react';
const override: CSSProperties = {
  display: 'block',
  position: 'fixed',
  zIndex: '9999',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export function Loading(): ReactElement {
  const isFetching = useIsFetching(); // for now, just don't display

  const display = isFetching ? true : false;

  return (
    <ClipLoader
      color="#ffffff"
      cssOverride={override}
      loading={display}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
