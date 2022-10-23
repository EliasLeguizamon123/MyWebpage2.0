import { Box, Flex, Text } from '@chakra-ui/react';
import AnimatedText from './components/AnimatedText.component';
import Title from './components/Title.component';
import VideoBackground from './components/VideoBackground.component';

function Home() {
    return (
        <Box>
            <Flex
                color="white"
                direction="column"
                h={'100vh'}
                justify={'center'}
                pl={[6, 8, 44]}
                position={'absolute'}
                textAlign="left"
                w={'100vw'}
            >
                <Text fontSize={['2xl', '3xl', '5xl']}>
                    Hi, mi name is <AnimatedText text={'Elías Leguizamón'} />
                </Text>
                <Title text="A Fullstack Developer" />
            </Flex>
            <VideoBackground />
        </Box>
    );
}

export default Home;
