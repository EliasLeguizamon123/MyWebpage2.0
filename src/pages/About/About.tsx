import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import Navbar from '../../components/Navbar';
import TechStackGallery from './components/TechStackGallery.component';

function About() {
    return (
        <Box>
            <Navbar />
            <Flex
                direction="column"
                h={'100vh'}
                position={'absolute'}
                pt={['8rem', '10rem', '15rem']}
                px={'2rem'}
                textAlign="left"
                w={'full'}
            >
                <Image />
                <Text as="cite" fontSize="xl" textAlign="center">
                    I have passion for create and learn new things constantly.
                    Also Open Source lover and i try to contribute with the
                    community. I have a minimalist mindset, i love team work
                    too.
                </Text>
                <Text
                    fontSize="2xl"
                    pt={8}
                    textAlign="center"
                    variant="reachMe"
                >
                    My tech stack
                </Text>
                <TechStackGallery />
            </Flex>
        </Box>
    );
}

export default About;
