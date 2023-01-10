import { Flex, Spinner, Text } from '@chakra-ui/react';

export const Loading = () => {
    return (
        <Flex
            align="center"
            direction="column"
            gap="2"
            h="100vh"
            justify={'center'}
            minH={'max-content'}
            w="100vw"
        >
            <Spinner color="primary" size="xl" />
            <Text>Loading...</Text>
        </Flex>
    );
};

export default Loading;
