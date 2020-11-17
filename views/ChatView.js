import {Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import Chat from '../components/Chat';
import ChatInformation from '../components/ChatInformation';
import ChatInput from '../components/ChatInput';
import SimpleMath from '../lib/SimpleMath';

const ChatView = () => {
  const [loading, setLoading] = useState(false);
  const [chatTextUser, setChatTextUser] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      id: Date.now(),
      type: 'machine',
      value: [
        {style: true, text: 'Manuals!'},
        '/math sum firstN secondN',
        '/math multiply firstN secondN',
        '/math prime n',
        '/math fib n',
      ],
    },
  ]);

  const calcMath = (type, n1, n2) => {
    const s = new SimpleMath(n1, n2);

    return s[type];
  };

  const chatHistoryObj = (text, type = 'machine') => {
    return {
      id: uuidv4(),
      type,
      value: [{style: true, text}],
    };
  };

  const onSend = () => {
    const tmpChat = [chatHistoryObj(chatTextUser, 'user')];

    setLoading(true);

    const res = mapArgs();

    tmpChat.push(chatHistoryObj(res));

    setChatTextUser('');

    setChatHistory([...chatHistory, ...tmpChat]);

    setLoading(false);
  };

  const mapArgs = () => {
    const text = chatTextUser.split(' ');
    let res = `I'm sorry, I don't understand the words that you are saying!`;

    if (text[0] === '/math') {
      if (text[1] === 'sum') {
        if (text[2] && text[3]) {
          const tmp = calcMath('sum', text[2], text[3]);
          res = `The sum of ${text[2]} and ${text[3]} is ${tmp}`;
        }
      } else if (text[1] === 'multiply') {
        const tmp = calcMath('multiply', text[2], text[3]);
        res = `The multiply of ${text[2]} and ${text[3]} is ${tmp}`;
      } else if (text[1] === 'prime') {
        const tmp = calcMath('primeSequence', text[2]);
        res = `The sequence prime of ${text[2]} is ${tmp.join(', ')}`;
      } else if (text[1] === 'fib') {
        const tmp = calcMath('fibSequence', text[2]);
        res = `The squence fib of ${text[2]} is ${tmp.join(', ')}`;
      }
    }

    return res;
  };

  return (
    <React.Fragment>
      <ChatInformation />
      <Chat chatHistory={chatHistory} />
      <ChatInput
        onSend={onSend}
        inputVal={chatTextUser}
        onInputValChange={setChatTextUser}
        style={ChatViewStyles.chatInput}
        disabled={loading}
      />
    </React.Fragment>
  );
};

const ChatViewStyles = StyleSheet.create({
  chatInput: {
    flex: 1,
    width: '100%',
  },
});

export default ChatView;
