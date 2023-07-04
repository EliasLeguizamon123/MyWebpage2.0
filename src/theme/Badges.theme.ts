import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const fires = defineStyle({
    border: '1px dotted',
    borderRadius: 'full',
    background: 'primary',
    color: 'backgroundD',
    _hover: {
        cursor: 'auto',
        transitionDuration: '0.5s',
        background: 'transparent',
        color: 'primary',
        border: '1px solid',
    },
    _dark: {
        background: 'primary',
        color: 'backgroundL',
        _hover: {
            transitionDuration: '0.5s',
            background: 'transparent',
            color: 'primary',
        },
    },
});

export const badgesTheme = defineStyleConfig({
    variants: { fires },
});
