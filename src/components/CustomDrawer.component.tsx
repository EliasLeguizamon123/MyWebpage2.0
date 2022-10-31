import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    SimpleGrid,
    Spacer,
    Text,
    useColorMode,
} from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';
import { RiFlashlightLine, RiFlashlightFill } from 'react-icons/ri';
interface props {
    isOpen: any;
    onClose: any;
}
function CustomDrawer(props: props) {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Drawer
            isOpen={props.isOpen}
            placement="right"
            size="full"
            onClose={props.onClose}
        >
            <DrawerOverlay />
            <DrawerContent
                bg={colorMode === 'light' ? 'backgroundL' : 'backgroundD'}
            >
                <DrawerHeader>
                    <Flex w="full">
                        <Button variant="newGhost" onClick={toggleColorMode}>
                            {colorMode === 'light' ? (
                                <RiFlashlightLine size="28px" />
                            ) : (
                                <RiFlashlightFill size="28px" />
                            )}
                        </Button>
                        <Spacer />
                        <Button variant="newGhost" onClick={props.onClose}>
                            <AiOutlineClose size="28px" />
                        </Button>
                    </Flex>
                </DrawerHeader>
                <DrawerBody>
                    <Flex w="full">
                        <SimpleGrid
                            columns={[1, 2]}
                            px={4}
                            py={10}
                            spacing={10}
                            w="full"
                        >
                            {/* //! Sacar de otro CustomComponent Box */}
                            <Box bg="tomato">
                                <Text>Navigation Content</Text>
                            </Box>
                            <Box bg="pink">
                                <Text>Reach me content</Text>
                            </Box>
                        </SimpleGrid>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}

export default CustomDrawer;
