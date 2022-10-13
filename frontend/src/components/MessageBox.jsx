import React from 'react';
import MessageBoxType from './MessageBoxType';

const MessageBox = ({ variant, children }) => {
  return (
    <MessageBoxType variant={variant} children={children} />
  );
};

MessageBox.defaultProps = { variant: 'info' };

export default MessageBox;
