import React from 'react';
import { Theme } from './hooks/Theme/Theme';

import { App } from './App';

export const ThemedApp = () => (
  <Theme>
    <App />
  </Theme>
);
