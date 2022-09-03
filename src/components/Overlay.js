import React from 'react';
import LoadingOverlay from "react-loading-overlay";
import Spinner from './Spinner';

const Overlay = props => (
  <LoadingOverlay
    {...props}
    spinner={<Spinner />}
    styles={{
      overlay: base => ({
        ...base,
        background: "rgba(255, 255, 255, 0.7)"
      }),
      content: base => ({
        ...base,
        marginTop: props.marginTop
      })
    }}
  >
    {props.children}
  </LoadingOverlay>
);

export default Overlay