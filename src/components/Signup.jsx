import React from 'react'
import { Button, Container, Heading, Input, VStack, Avatar } from '@chakra-ui/react'

function Signup() {
    return (
        <Container 
         h={'120vh'}
         w={['full','container.xl']}
         p={'16'}
        
        >
             <form>
                 <VStack
                     alignItems={'stretch'}
                     w={['full','96']}
                     spacing={'8'}
                   
                     my={'16'}
                 >
                     <Heading alignSelf={'center'}>Zclimer</Heading>
                     <Avatar alignSelf={'center'} boxSize={'32'}/>

                     <Input 
                         placeholder={'Name'} 
                         type={'text'} 
                         focusBorderColor={'purple.500'}
                         required
                     />
     
     
                     <Input 
                         placeholder={'Email'} 
                         type={'email'} 
                         focusBorderColor={'purple.500'}
                         required
                     />
     
                     <Input 
                         placeholder={'Password'} 
                         type={'password'} 
                         focusBorderColor={'purple.500'}
                         required
                     />
                     
                     <Button
                         colorScheme={'purple'}
                         type={'submit'}
                     >SignUp</Button>
     
                     
     
                 </VStack>
             </form>
        </Container>
       )
}

export default Signup