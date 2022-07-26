import React from 'react';

import {useButton} from '@react-aria/button';
import {useRef} from 'react';

function Button(props) {
  let ref = useRef();
  let { buttonProps } = useButton(props, ref);
  let { children } = props;

  return (
    <button {...buttonProps} ref={ref}>
      {children}
    </button>
  );
}

export default Button