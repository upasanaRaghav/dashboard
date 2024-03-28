import React from 'react';
import { Box, Flex, Typography } from '@mui/material';
import Card from 'components/card/Card';

export default function Default(props) {
  const { startContent, endContent, name, growth, value } = props;
  const textColor = 'rgba(0, 0, 0, 0.87)';
  const textColorSecondary = 'rgba(0, 0, 0, 0.54)';

  return (
    <Card py={2}>
      <Flex
        my='auto'
        h='100%'
        alignItems='center'
        justifyContent={{ xs: 'center', xl: 'start' }}
      >
        {startContent && (
          <Box mr={{ xl: 3 }}>
            {startContent}
          </Box>
        )}

        <Box mr={{ xs: 1, xl: startContent ? 3 : 0 }}>
          <Typography variant='subtitle2' color={textColorSecondary}>
            {name}
          </Typography>
          <Typography variant='h6' color={textColor}>
            {value}
          </Typography>
          {growth && (
            <Flex alignItems='center'>
              <Typography variant='body2' color='success.main' fontWeight='bold' mr={0.5}>
                {growth}
              </Typography>
              <Typography variant='body2' color={textColorSecondary}>
                From 4.6%
              </Typography>
            </Flex>
          )}
        </Box>

        {endContent && (
          <Box ml={{ xs: 1, xl: 'auto' }}>
            {endContent}
          </Box>
        )}
      </Flex>
    </Card>
  );
}
