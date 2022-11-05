import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const reachMe = defineStyle({
    fontFamily: 'Raleway',
    fontStyle: 'italic',
    textDecoration: 'overline',
    fontSize: 'xl',
    _dark: {
        color: 'primary',
    },
});

const item = defineStyle({
    as: 'samp',
    _hover: {
        color: 'primary',
        as: 'ins',
    },
});

export const textTheme = defineStyleConfig({
    variants: { reachMe, item },
});
