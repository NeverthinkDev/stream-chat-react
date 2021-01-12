import React from 'react';
import MessageInputLarge from './MessageInputLarge';

const MessageInput = (props) => {
  const { Input } = props;
  return <Input {...props} />;
};

MessageInput.defaultProps = {
  focus: false,
  disabled: false,
  disableMentions: false,
  publishTypingEvent: true,
  grow: true,
  maxRows: 10,
  Input: MessageInputLarge,
  additionalTextareaProps: {},
};

export default React.memo(MessageInput);
