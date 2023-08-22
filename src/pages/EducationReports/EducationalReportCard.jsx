import React from 'react';
import { Box, Image, Text, Link } from '@chakra-ui/react';

const EducationalReportCard = ({ imageSrc, heading, text, pdfUrl }) => {
  return (

    <Box
    width="100%"
    maxWidth="350px"
    padding="20px"
    // borderWidth="1px"
    // borderRadius="lg"
    overflow="hidden"
    boxShadow="md"
    marginBottom="20px"
    transition="transform 0.2s"
    _hover={{ transform: 'scale(1.05)' }}
    >
      <Image src={imageSrc} alt={heading} height="200px" objectFit="cover" />
      <Text mt="4" fontWeight="semibold" fontSize="xl">
        {heading}
      </Text>
      <Text mt="2">{text}</Text>
      <Link
      href={pdfUrl}
      download
      mt="3"
      display="block"
      fontSize="sm"
      color="blue.500"
      _hover={{ color: 'blue.600' }}
      >
        Read the complete article
      </Link>
    </Box>
  );
};

export default EducationalReportCard;
