import { Flex, Text } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';

function Home() {
    const animatedStyles = useSpring({
        loop: true,
        to: [{ color: '#153084' }, { color: '#ff5f3f' }],
        from: { color: '#ff893f' },
        config: {
            duration: 500,
        },
    });

    return (
        <Flex
            direction="column"
            h={'100vh'}
            justify={'center'}
            pl={[6, 8, 44]}
            textAlign="left"
            w={'100vw'}
        >
            <Text fontSize={['2xl', '3xl', '5xl']}>
                Hi, mi name is{' '}
                <Text as="i">
                    <animated.div style={animatedStyles}>
                        Elías Leguizamón
                    </animated.div>
                </Text>
            </Text>
            <Text fontSize={['2xl', '3xl', '5xl']}>
                I am a Fullstack Developer.
            </Text>
        </Flex>
    );
}

export default Home;
