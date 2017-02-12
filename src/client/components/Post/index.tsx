import * as React from 'react';
import { Box } from './styles';

export default function Post(props: { content: string; }) {
  const { content } = props;
  return (
    <Box>
      {content}
    </Box>
  );
};
