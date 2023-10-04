import { Box, Flex, Image, Text } from '@chakra-ui/react';
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
                pt={['8rem', '10rem', '10rem']}
                px={'2rem'}
                textAlign="left"
                w={'full'}
            >
                <Image />
                <Text as="cite" fontSize="xl" textAlign="center">
                    ” Passionate about constantly creating and learning new
                    things, dedicated Open Source enthusiast, and committed to
                    contribute to the community with a minimalist mindset.”
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
