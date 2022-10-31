import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const navigation = defineStyle({
    _hover: {
        color: 'primary',
        transitionDuration: '0.5s',
        fontSize: '40px',
        textDecoration: 'overline',
    },
});

const selected = defineStyle({
    fontSize: '40px',
    textDecoration: 'overline',
    color: 'primary',
});

export const headingTheme = defineStyleConfig({
    variants: { navigation, selected },
});
