import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
  } from '@chakra-ui/react';
  import {Link} from 'react-router-dom';
  import {BiMenuAltLeft} from 'react-icons/bi'

function Header() {
    return (
        <>
            <Button>
                <BiMenuAltLeft pos={'fixed'} top={'4px'} left={'4px'} size={'20'}/>
            </Button>
        </>
      )
    
}

export default Header