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
                pl={[6, 8, 44]}
                position={'absolute'}
                pt={['8rem', '10rem', '15rem']}
                textAlign="left"
                w={'80vw'}
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
