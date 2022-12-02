import { CSSProperties } from 'react';
import GridLoader from 'react-spinners/GridLoader';
import { useIsFetching } from '@tanstack/react-query';
import { ReactElement } from 'react';
const wrap: CSSProperties = {
  position: 'fixed',
  zIndex: '9999',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255,255,255,.5)',
};

const spinner: CSSProperties = {
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export function Loading(): ReactElement {
  const isFetching = useIsFetching(); // for now, just don't display

  const display = isFetching ? true : false;

  return (
    <div style={{ display: `${display ? 'inherit' : 'none'}` }}>
      <div style={wrap}>
        <GridLoader
          color="#36d7b7"
          cssOverride={spinner}
          loading={display}
          size={25}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}
