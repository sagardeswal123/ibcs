import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const EventBox = ({ imageSrc, heading }) => {
  return (
    <Box
    width={{ base: '100%', md: '31%' }}
      padding="20px"
    //   borderWidth="1px"
    //   borderRadius="lg"
      overflow="hidden"
    //   boxShadow="md"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image src={imageSrc} alt={heading} w={"full"} height="300px" objectFit="cover" />
      <Box mt="4">
        <Text fontWeight="semibold" fontSize="xl">
          {heading}
        </Text>
      </Box>
    </Box>
  );
};

export default EventBox;

