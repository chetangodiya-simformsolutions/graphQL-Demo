import { createRef } from 'react';

export const navigationRef = createRef();

export function navigate(...props) {
  navigationRef?.current?.navigate(...props);
}
