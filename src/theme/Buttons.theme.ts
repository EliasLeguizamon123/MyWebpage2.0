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

const tech = defineStyle({
    _hover: {
        bg: 'primary',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
    },
    bg: 'transparent',
    blockSize: 'auto',
    flexDirection: 'column',
    maxH: '5em',
    minH: '5em',
    textAlign: 'center',
    transitionDuration: '0.7s',
});

export const buttonTheme = defineStyleConfig({
    variants: { newGhost, tech },
});
