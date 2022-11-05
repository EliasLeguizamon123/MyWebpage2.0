import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const navigation = defineStyle({
    fontSize: ['65px', '55px', '45px'],
    _hover: {
        color: 'primary',
        transitionDuration: '0.1s',
        fontSize: ['70px', '60px', '50px'],
        textDecoration: 'overline',
    },
});

const selected = defineStyle({
    fontSize: ['70px', '60px', '50px'],
    textDecoration: 'overline',
    color: 'primary',
});

export const headingTheme = defineStyleConfig({
    variants: { navigation, selected },
});
