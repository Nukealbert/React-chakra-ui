import { Button, Container, Heading, Input, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
   <Container 
    h={'100vh'}
    w={'container.xl'}
    p={'16'}
   >
        <form>
            <VStack
                alignItems={'stretch'}
                w={['full','96']}
                spacing={'8'}
                m={'auto'}
                my={'16'}
            >
                <Heading alignSelf={'center'}>Welcome Back</Heading>

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
                    variant={'link'}
                    alignSelf={'flex-end'}
                    colorScheme='purple'
                ><Link to={'/forgotpassword'}>Forgot password?</Link></Button>
                <Button
                    colorScheme={'purple'}
                    type={'submit'}
                >Login</Button>

                <Text textAlign={'right'}>New User? {' '}
                <Button
                    variant={'link'}
                    
                    colorScheme='purple'
                ><Link to={'/forgotpassword'}>SignUp</Link></Button></Text>

            </VStack>
        </form>
   </Container>
  )
}

export default Login