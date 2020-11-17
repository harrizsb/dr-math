import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import ChatView from './views/ChatView';

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <ChatView />
  </ApplicationProvider>
);
