import { Button } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

interface props {
    onOpen: any;
}
function CustomMenuButton(props: props) {
    return (
        <Button variant="newGhost" onClick={props.onOpen}>
            <AiOutlineMenu />
        </Button>
    );
}

export default CustomMenuButton;
