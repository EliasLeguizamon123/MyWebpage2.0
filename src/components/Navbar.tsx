import { Flex, Spacer, useDisclosure } from '@chakra-ui/react';
import CustomDrawer from './CustomDrawer.component';
import CustomMenuButton from './CustomMenuButton.component';

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex h="2rem" p={2} position={'absolute'} w="full" zIndex={'2'}>
            <Spacer />
            <CustomMenuButton onOpen={onOpen} />
            <CustomDrawer isOpen={isOpen} onClose={onClose} />
        </Flex>
    );
}

export default Navbar;
