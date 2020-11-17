import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';
import Chat from './components/Chat';
import ChatText from './components/ChatText';

describe('App', () => {
  test('renders App component', () => {
    const app = renderer.create(<App />).toJSON();

    expect(app).toBeTruthy();
  });

  test('initial render chat', () => {
    const app = renderer.create(<App />).root;

    const c = app.findByType(Chat);

    expect(c.findByType(ChatText).props.text).toEqual([
      {style: true, text: 'Manuals!'},
      '/math sum firstN secondN',
      '/math multiply firstN secondN',
      '/math prime n',
      '/math fib n',
    ]);
  });
});
