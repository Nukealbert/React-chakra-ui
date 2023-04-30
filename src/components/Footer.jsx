import { Box, Button, HStack, Heading, Input, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react';
import {AiOutlineSend,AiFillInstagram,AiFillYoutube,AiFillLinkedin} from 'react-icons/ai';


function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>

        <Stack direction={['column','row']}>
            <VStack w={'full'} alignItems={'stretch'}>
                <Heading size={'md'} textTransform={'uppercase'}>Subscribe to our Newsletter</Heading>
                <HStack
                borderBottom={'2px solid white'}
                py={'2'}
                    
                >
                    <Input 
                    placeholder='Enter Email here....'  
                    border={'none'} 
                    borderRadius={'none'} 
                    outline={'none'} 
                    focusBorderColor='none'/
                    >
                    <Button 
                    p={'0'} 
                    colorScheme='purple' 
                    variant={'ghost'} 
                    borderRadius={'0 20px 20px 0'}
                    
                    
                    >
                        <AiOutlineSend size={'20'} />
                    </Button>
                </HStack>
            </VStack>

            <VStack  
            w={'full'} 
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
            >
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    Zclimer
                    
                </Heading>
                <Text>All rights reserved</Text>
            </VStack>


            <VStack  
            w={'full'} 
            >
                <Heading size={'md'} textTransform={'uppercase'}> Social Media</Heading>
                <HStack>
                    <Button variant={'link'} colorScheme='whiteAlpha'>
                        <a href='www.google.com'><AiFillYoutube size={'20'} /></a>
                    </Button>
                    <Button variant={'link'} colorScheme='whiteAlpha'>
                        <a href='www.google.com'><AiFillInstagram size={'20'} /></a>
                    </Button>
                    <Button variant={'link'} colorScheme='whiteAlpha'>
                        <a href='www.google.com'><AiFillLinkedin size={'20'} /></a>
                    </Button>
                </HStack>
                
            </VStack>
            

        </Stack>

    </Box>
  )
}

export default Footer