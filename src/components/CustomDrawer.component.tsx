import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    SimpleGrid,
    Spacer,
    Text,
    useColorMode,
    VStack,
} from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';
import { RiFlashlightLine, RiFlashlightFill } from 'react-icons/ri';
import { Navigation } from '../models/navigation.model';
import CustomNavContent from './CustomNavContent.component';
import { HiDocumentArrowDown } from 'react-icons/hi2';

interface props {
    isOpen: any;
    onClose: any;
}
function CustomDrawer(props: props) {
    const { colorMode, toggleColorMode } = useColorMode();
    const nav: Navigation[] = [
        { index: 1, title: 'Home', path: '/' },
        { index: 2, title: 'Projects', path: '/projects' },
        { index: 3, title: 'About', path: '/about' },
    ];

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
                            columns={[1, 1, 2, 2]}
                            px={4}
                            py={10}
                            spacing={10}
                            w="full"
                        >
                            <CustomNavContent nav={nav} />
                            <VStack
                                display={['none', 'none', 'flex']}
                                spacing={12}
                                textAlign="center"
                            >
                                <VStack spacing={2}>
                                    <Text variant="reachMe">Reach me. </Text>
                                    <a
                                        href="https://github.com/EliasLeguizamon123"
                                        rel="myGithubProfile noreferrer"
                                        target="_blank"
                                    >
                                        <Text as="samp" variant="item">
                                            Github
                                        </Text>
                                    </a>
                                    <a
                                        href="https://github.com/EliasLeguizamon123"
                                        rel="linkedinProfile noreferrer"
                                        target="_blank"
                                    >
                                        <Text as="samp" variant="item">
                                            Linkedin
                                        </Text>
                                    </a>
                                </VStack>
                                <VStack>
                                    <Text variant="reachMe">Contact me.</Text>
                                    <a href="mailto:elias.leguizamon1997@gmail.com">
                                        <Text as="samp" variant="item">
                                            elias.leguizamon1997@gmail.com
                                        </Text>
                                    </a>
                                </VStack>
                            </VStack>
                        </SimpleGrid>
                    </Flex>
                </DrawerBody>
                <DrawerFooter display={['none', 'none', 'flex']}>
                    <a
                        href="https://drive.google.com/file/d/1fqOAj8kaUcZYxZ41UxjNCxL-00RY08qa/view?usp=drive_link"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <Button mt={'4rem'} variant="newGhost">
                            <HiDocumentArrowDown />
                        </Button>
                    </a>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

export default CustomDrawer;
