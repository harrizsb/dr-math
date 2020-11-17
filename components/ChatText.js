import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ChatText = (props) => {
  const textContainerPosition = () => {
    const tmp = ChatTextStyle.chatTextContainer;

    if (props.user && props.user === 'user') {
      return {
        ...tmp,
        backgroundColor: '#ddd',
        alignSelf: 'flex-end',
      };
    }

    return tmp;
  };

  const parseText = () => {
    if (props.text) {
      return props.text.map((val, index) => {
        if (val.style) {
          return (
            <Text key={index} style={ChatTextStyle.chatText}>
              {val.text}
            </Text>
          );
        } else {
          return <Text key={index}>{val.text || val}</Text>;
        }
      });
    } else {
      return null;
    }
  };

  return <View style={textContainerPosition()}>{parseText()}</View>;
};

const ChatTextStyle = StyleSheet.create({
  chatTextContainer: {
    flexDirection: 'column',
    backgroundColor: '#eee',
    padding: 10,
    width: '70%',
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  chatText: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ChatText;
