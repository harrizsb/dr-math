import {Button, Layout} from '@ui-kitten/components';
import React, {useRef, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const ChatInput = (props) => {
  const inputText = useRef(null);

  return (
    <Layout level="1">
      <View style={ChatInputStyles.chatInput}>
        <TextInput
          style={ChatInputStyles.textInput}
          multiline={true}
          textAlignVertical="top"
          numberOfLines={1}
          value={props.chatTextUser}
          onChangeText={props.onInputValChange}
          editable={!props.disabled}
          ref={inputText}
        />
        <Button
          style={ChatInputStyles.chatBtn}
          onPress={() => {
            inputText.current.clear();
            props.onSend();
          }}
          disabled={props.disabled}>
          Send
        </Button>
      </View>
    </Layout>
  );
};

const ChatInputStyles = StyleSheet.create({
  chatInput: {
    flexDirection: 'row',
    position: 'relative',
  },
  textInput: {
    width: '75%',
  },
  chatBtn: {
    width: '25%',
    borderRadius: 0,
  },
});

export default ChatInput;
