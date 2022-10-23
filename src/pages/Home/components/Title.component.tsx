import { Text } from '@chakra-ui/react';
import { title } from '../../../models/title.model';

export function Title(title: title) {
    return (
        <Text fontSize={'1.5rem'} mb="2rem">
            {title.text}
        </Text>
    );
}

export default Title;
