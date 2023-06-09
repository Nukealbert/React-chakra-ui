import { Box, Container, Heading, Image, Stack,Text } from '@chakra-ui/react'
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions ={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p:'4',
    size:'2xl'
}

function Home() {
  return (
    <Box>
        <MyCarousel />

        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>


            <Heading 
            textTransform={'uppercase'} 
            w={'fit-content'} 
            m={'auto'}  
            borderBottom={'2px solid'}
            >
                Services
            </Heading>

            <Stack
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column','row']}
            >

                <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}  />
                <Text p={['4','16']} letterSpacing={'widest'} lineHeight={'190%'} textAlign={'center'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Magnam eligendi quis voluptatum, molestias officiis 
                     deleniti ex dolores quas ipsa delectus quos incidunt
                      ullam numquam eum doloremque non quisquam dolore neque 
                      quo quaerat totam recusandae qui nisi? Officiis unde,
                       quis itaque at aliquam nesciunt ducimus corporis nihil,
                        eligendi minima qui illo?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Magnam eligendi quis voluptatum, molestias officiis 
                     deleniti ex dolores quas ipsa delectus quos incidunt
                      ullam numquam eum doloremque non quisquam dolore neque 
                      quo quaerat totam recusandae qui nisi? Officiis unde,
                       quis itaque at aliquam nesciunt ducimus corporis nihil,
                        eligendi minima qui illo?
                </Text>

            </Stack>

        </Container>

    </Box>
  )
}

const MyCarousel=()=>(
    <Carousel 
        autoPlay 
        infiniteLoop interval={2000} 
        showStatus={false} 
        showThumbs={false} 
        showArrows={false}
    >
        <Box w={'full'} h={'100vh'}>

            <Image src={img1}/>
            <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch The Future</Heading>

        </Box>
        <Box w={'full'} h={'100vh'}>

            <Image src={img2}/>
            <Heading bg={'whiteAlpha.900'} color={'black'} {...headingOptions}>Future is gaming</Heading>

        </Box>
        <Box w={'full'} h={'100vh'}>

            <Image src={img3}/>
            <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>Gaming on console</Heading>

        </Box>
        <Box w={'full'} h={'100vh'}>

            <Image src={img4}/>
            <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>Zclimer! we do it better</Heading>

        </Box>

    </Carousel>
);

export default Home