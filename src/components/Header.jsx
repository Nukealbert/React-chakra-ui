import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';



function Header() {
    const { isOpen, onClose, onOpen } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} pos={'fixed'}
                top={'4px'}
                left={'4px'}
                colorScheme='purple'
                p={'0'}
                w={'10'}
                h={'10'}
                borderRadius={'full'}><BiMenuAltLeft size={'20'} />
            </Button>
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>ZCLIMER</DrawerHeader>
                        <DrawerBody>
                            <VStack align={'flex-start'}>
                                <Button
                                    onClick={onClose}
                                    variant={'ghost'}
                                    colorScheme='purple'>
                                    <Link to={'/'}>Home</Link>
                                </Button>
                                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                                    <Link to={'/videos'}>Videos</Link>
                                </Button>
                                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                                    <Link to={'/videos?category=free'}>Free Videos</Link>
                                </Button>
                                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                                    <Link to={'/upload'}>Upload Video</Link>
                                </Button>
                            </VStack>

                            <HStack
                                position={'absolute'}
                                bottom={'10'}
                                w={'full'}
                                left={'-2'}
                                justifyContent={'space-evenly'}> <Button onClick={onClose} colorScheme='purple'>

                                    <Link to={'/login'} >Log In</Link>
                                </Button>
                                <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                                    <Link to={'/signup'} >Sign Up</Link>
                                </Button>
                            </HStack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )

}

export default Header