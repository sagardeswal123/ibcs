import React from 'react'
// import Slideshow from '../components/Motivation/Poster'
import { Box, Flex, Text } from '@chakra-ui/react';
import Carousel from '../../components/Motivation/Poster';
import EventBox from './EventBox';

const Home = () => {

  const events = [
    {
      imageSrc: 'https://bnz07pap001files.storage.live.com/y4mIMLCB-aPe2lMmQqBnI7BhKz_vLcwNET8L_1B-tcn_Ys3C1vnEjhZNA8voA0LxX0eW4aAPqoBxl5E-2nEtVvL49BidnjNOtknHEOx7R-dDcJGX7KQ_MY0FTN2v2aoKWH6jZxxzCXTUCiDaZTi5DY0ZF42TlE2TRUq9eux-bD28pWUsAUmd5TEOySSWNCCQljU8L_dPwcndGgkbz0eCqU9_G4Qh_c2ZFMA4WxpuQaSkss?encodeFailures=1&width=1177&height=785',
      heading: 'Event 1',
    },
    {
      imageSrc: 'https://bnz07pap001files.storage.live.com/y4mMHTfWUG135LFUlg0wwBbqgmtJdfDpicjW5HLird8ek8US7-B1Bq1oZcz-0StoI-ScXqu66DabOpIMEwyJ5xxqrodz3TFN02nw4vO01gHlwqGOwk4Ba1278duVLKyD7vatilk4kP_9jteNbn913dVraGoywHsSo5cSnQdtozVKiXAeCitqOms37uR__-vD4keB5Kq7T-L60hOa-G-_Pl4k9LB381YI4_crfkE1FHY_wU?encodeFailures=1&width=252&height=196',
      heading: 'Event 2',
    },
    {
      imageSrc: 'https://bnz07pap001files.storage.live.com/y4mIXl8ogAosIC6LYuSTwl78_AKSLsovq8n8lJQ4V4QgNSDqZPTCcAThF7oRbA2-hrV4ZodPs85AIr6j2qV8bGOi7tbGJhHM96knsEoAA6F0w7eS6xHLmJO95CfihG-4tjO0dDl6EspX7pS-EsIoUcEeskogigeNpeIvKBClqioNWmqdnRJgHYMHwNT9aJ_CE_O6RF88UfbgeAPT51kxg1G1AyvetN4ezJIGBs_IuGvVI8?encodeFailures=1&width=285&height=196',
      heading: 'Event 3',
    },
  ];

  const projects = [
    {
      imageSrc: 'https://bnz07pap001files.storage.live.com/y4mIMLCB-aPe2lMmQqBnI7BhKz_vLcwNET8L_1B-tcn_Ys3C1vnEjhZNA8voA0LxX0eW4aAPqoBxl5E-2nEtVvL49BidnjNOtknHEOx7R-dDcJGX7KQ_MY0FTN2v2aoKWH6jZxxzCXTUCiDaZTi5DY0ZF42TlE2TRUq9eux-bD28pWUsAUmd5TEOySSWNCCQljU8L_dPwcndGgkbz0eCqU9_G4Qh_c2ZFMA4WxpuQaSkss?encodeFailures=1&width=1177&height=785',
      heading: 'Project 1',
    },
    {
      imageSrc: 'https://bnz07pap001files.storage.live.com/y4mMHTfWUG135LFUlg0wwBbqgmtJdfDpicjW5HLird8ek8US7-B1Bq1oZcz-0StoI-ScXqu66DabOpIMEwyJ5xxqrodz3TFN02nw4vO01gHlwqGOwk4Ba1278duVLKyD7vatilk4kP_9jteNbn913dVraGoywHsSo5cSnQdtozVKiXAeCitqOms37uR__-vD4keB5Kq7T-L60hOa-G-_Pl4k9LB381YI4_crfkE1FHY_wU?encodeFailures=1&width=252&height=196',
      heading: 'Project 2',
    },
    {
      imageSrc: 'https://bnz07pap001files.storage.live.com/y4mIXl8ogAosIC6LYuSTwl78_AKSLsovq8n8lJQ4V4QgNSDqZPTCcAThF7oRbA2-hrV4ZodPs85AIr6j2qV8bGOi7tbGJhHM96knsEoAA6F0w7eS6xHLmJO95CfihG-4tjO0dDl6EspX7pS-EsIoUcEeskogigeNpeIvKBClqioNWmqdnRJgHYMHwNT9aJ_CE_O6RF88UfbgeAPT51kxg1G1AyvetN4ezJIGBs_IuGvVI8?encodeFailures=1&width=285&height=196',
      heading: 'Project 3',
    },
  ];

  return (
    <div>
      <Box mt={10}>
      <Carousel />
        <Text fontSize="3xl" mb={"30px"} mt={"80px"} >ONGOING EVENTS</Text>
        <Flex justify="space-evenly" p={{ base: '20px', md: '0' }} direction={{ base: 'column', md: 'row' }} align="center" width={"full"} >
          {events.map((event, index) => (
            <EventBox key={index} imageSrc={event.imageSrc} heading={event.heading} />
          ))}
        </Flex>
        <Text fontSize="3xl" mb={"30px"} mt={"70px"} >TOP PROJECTS</Text>
        <Flex justify="space-evenly" p={{ base: '20px', md: '0' }} direction={{ base: 'column', md: 'row' }} align="center" width={"full"} >
          {projects.map((event, index) => (
            <EventBox key={index} imageSrc={event.imageSrc} heading={event.heading} />
          ))}
        </Flex>
        <Text fontSize="3xl" mb={"30px"} mt={"70px"}>WHAT WE DO</Text>
      </Box>
    </div>
  )
}

export default Home