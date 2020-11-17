import React, {useRef} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ChatText from './ChatText';

const Chat = (props) => {
  const scrollViewRef = useRef();

  return (
    <ScrollView
      style={ChatStyles.chatContainer}
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({animated: true})
      }>
      {props.chatHistory.map(({type, value, id}) => {
        return <ChatText key={id} user={type} text={value} />;
      })}
    </ScrollView>
  );
};

const ChatStyles = StyleSheet.create({
  chatContainer: {
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
});

export default Chat;
