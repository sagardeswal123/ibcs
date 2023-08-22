import React from 'react'
import EducationalReportCard from './EducationalReportCard';
import { Grid, Text } from '@chakra-ui/react';

const EducationReport = () => {

    const boxes = [
        {
          imageSrc: 'https://bnz07pap001files.storage.live.com/y4mTp_PpqaxWM397q_jhnnENmnTj-iYTO3Fd8zFs3U09YPxgHKJm2GuZADl_qxEmteiOPoBmKptE_1ZejVLCm61q9_2Lq_lWWSAVDzvyyWWeN5pYpWGd-3Pt3cX2A4RoJOOtWkdDcJonPsGOMLV4NBD2UBe2Ge9loxqHObJQXVPt9sO2SyZX5R1miG6tSooFFI6xMmy_UuIHKpkJJVPl50bFncBhvRqOfbVwimQPJXDE28?encodeFailures=1&width=1177&height=785',
          heading: 'Awareness through pamphlets on vultures among school students in Deogarh, Lalitpur',
        //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          pdfUrl: 'https://onedrive.live.com/view.aspx?resid=146B4272BD0C5253!55593',
        },
        {
          imageSrc: 'path-to-image-2.jpg',
          heading: 'Box 2',
          text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          pdfUrl: 'path-to-pdf-2.pdf',
        },
        {
          imageSrc: 'path-to-image-3.jpg',
          heading: 'Box 3',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          pdfUrl: 'path-to-pdf-3.pdf',
        },
        {
            imageSrc: 'path-to-image-1.jpg',
            heading: 'Box 1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            pdfUrl: 'path-to-pdf-1.pdf',
          },
          {
            imageSrc: 'path-to-image-2.jpg',
            heading: 'Box 2',
            text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            pdfUrl: 'path-to-pdf-2.pdf',
          },
          {
            imageSrc: 'path-to-image-3.jpg',
            heading: 'Box 3',
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            pdfUrl: 'path-to-pdf-3.pdf',
          },
      ];

  return (
    <div>
        <Text backgroundColor={"lightGreen"} fontSize={"3xl"} m={"30px"} >
            Educational Reports
        </Text>
        <Grid
        templateColumns={{ base: '1fr', sm: 'repeat(3, 1fr)' }}
        gap="20px"
        p="20px"
      >
        {boxes.map((box, index) => (
          <EducationalReportCard
            key={index}
            imageSrc={box.imageSrc}
            heading={box.heading}
            text={box.text}
            pdfUrl={box.pdfUrl}
          />
        ))}
      </Grid>
    </div>
  )
}

export default EducationReport