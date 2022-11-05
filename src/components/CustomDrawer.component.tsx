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

    const resume = () => {
        window.open(
            'https://doc-08-04-apps-viewer.googleusercontent.com/viewer/secure/pdf/65rr3auhvo6pueg1dksmsgd046e1fotd/44eied7puul5hatcs8c4frniiu1pt03h/1667674875000/drive/10755510647436254399/ACFrOgCoBesAijndlLJj2cG5MVjSAwKTCvWgk4XSz98Bs4TQOBWPepgUeYgybxpo3MYLjBV8_WEO6s6xp1LDS_FzoeZPFiBK3fA0EaKY3DCKp7G2-3SXHC_Nm6hlxNlb8vU_zIGKYMC0SYfu9-aK?print=true&nonce=8cl9q5k4obt1e&user=10755510647436254399&hash=4r46lcr4s39qmtuhfg5pm7avnfdjkedl',
            'blank'
        );
    };

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
                    <Button mt={'4rem'} variant="newGhost" onClick={resume}>
                        <HiDocumentArrowDown />
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

export default CustomDrawer;
