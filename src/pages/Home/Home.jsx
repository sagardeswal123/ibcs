import React from 'react'
// import Slideshow from '../components/Motivation/Poster'
import { Box, Flex, Text } from '@chakra-ui/react';
import Carousel from '../../components/Motivation/Poster';
import Color from "../../Logo/ColorActivity.jpg"
import Rangoli from "../../Logo/RangoliActivity.jpg"
import Mehandi from "../../Logo/MehandiActivity.jpg"
import EventBox from './EventBox';
import ImageCarousel from '../../components/imagecrousel/ImageCarousel';

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

  const activity = [
    {
      imageSrc: Color,
      heading: 'Coloring Activity',
    },
    {
      imageSrc: Rangoli,
      heading: 'Rangoli Activity',
    },
    {
      imageSrc: Mehandi,
      heading: 'Mehandi Activity',
    },
  ];

  const projects = [
    {
      imageSrc: "https://bcre.my/wp-content/uploads/2021/09/gunung-kanthan-square.jpg",
      heading: 'Conservation of cliffs dwelling avifauna (Critically Endangered, Endangered, Threatened and Vulnerable species) in selected districts.',
    },
    {
      imageSrc: 'https://live.staticflickr.com/7358/13081863444_b5c53bd6a5_b.jpg',
      heading: 'Status and distribution of State bird of Uttar Pradesh, Sarus crane (Grus antigone antigone) in Bundelkhand Districts of Uttar Pradesh, India, 2018.',
    },
    {
      imageSrc: 'https://th.bing.com/th/id/R.7f1b8c74b0e39b1d45f555647e2d804f?rik=RsO1uknvHZqcrw&riu=http%3a%2f%2fgallery.new-ecopsychology.org%2fphoto%2fbirds%2fhouse_sparrow_(passer_domesticus)-5.jpg&ehk=Wt5yIVjmp50%2bzNFSe%2fO3NUaU6wNWORUm7NYjui2v0rk%3d&risl=&pid=ImgRaw&r=0',
      heading: 'Conservation and up keeping of House Sparrow (Passer domesticus) population in Temple patios of Jhansi and Tikamgarh, India, 2019.',
    },
  ];

  return (
    <div>
      <Box mt={10}>
      {/* <Carousel /> */}
      <ImageCarousel/>
        <Text fontSize="3xl" mb={"30px"} mt={"80px"} >ONGOING EVENTS</Text>
        <Flex justify="space-evenly" p={{ base: '20px', md: '0' }} direction={{ base: 'column', md: 'row' }} align="center" width={"full"} >
          {events.map((event, index) => (
            <EventBox key={index} imageSrc={event.imageSrc} heading={event.heading} />
          ))}
        </Flex>
        <Text fontSize="3xl" mb={"30px"} mt={"70px"} >Our Activity</Text>
        <Flex justify="space-evenly" p={{ base: '20px', md: '0' }} direction={{ base: 'column', md: 'row' }} align="center" width={"full"} >
          {activity.map((event, index) => (
            <EventBox key={index} imageSrc={event.imageSrc} heading={event.heading} />
          ))}
        </Flex>
        <Text fontSize="3xl" mb={"30px"} mt={"70px"} >Top Projects</Text>
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