import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        primary: '#fcbf49',
        backgroundL: '#EDEDED',
        backgroundD: '#22272e',
    },
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
});

export default theme;
