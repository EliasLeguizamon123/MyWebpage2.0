import { Button, useColorMode } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

interface props {
    onOpen: any;
}
function CustomMenuButton(props: props) {
    const { colorMode } = useColorMode();

    return (
        <Button
            _hover={{
                color: 'primary',
                border: '2px dotted #fcbf49',
                opacity: '0.8',
            }}
            color={colorMode === 'dark' ? 'primary' : ''}
            variant="ghost"
            onClick={props.onOpen}
        >
            <AiOutlineMenu size="28px" />
        </Button>
    );
}

export default CustomMenuButton;
