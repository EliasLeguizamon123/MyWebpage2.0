import { Box, Flex, Text } from '@chakra-ui/react';
import Navbar from '../../components/Navbar';
import AnimatedText from './components/AnimatedText.component';
import Title from './components/Title.component';
import VideoBackground from './components/VideoBackground.component';
import { useEffect } from 'react';
import { getProjects } from '../../services/projects.service';
import { useDispatch } from 'react-redux';
import { chargeProjecs } from '../../redux/state/projects.state';

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        getProjects().then((res) => {
            dispatch(chargeProjecs(res.data));
        });
    }, []);

    return (
        <Box>
            <Navbar />
            <Flex
                direction="column"
                h={'100vh'}
                justify={'center'}
                pl={[6, 8, 44]}
                position={'absolute'}
                textAlign="left"
                w={'100vw'}
            >
                <Text fontSize={['3xl', '4xl', '6xl']}>
                    Hi, my name is <AnimatedText text={'Elías Leguizamón'} />
                </Text>
                <Title text="A Fullstack Developer from 🇦🇷" />
            </Flex>
            <VideoBackground />
        </Box>
    );
}

export default Home;
