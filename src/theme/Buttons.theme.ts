import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const newGhost = defineStyle({
    _hover: {
        color: 'primary',
        border: '2px dotted #fcbf49',
        opacity: '0.8',
    },
    _dark: {
        color: 'primary',
        background: 'transparent',
    },
    border: '0px',
    background: 'transparent',
    fontSize: '28px',
});

export const buttonTheme = defineStyleConfig({
    variants: { newGhost },
});
