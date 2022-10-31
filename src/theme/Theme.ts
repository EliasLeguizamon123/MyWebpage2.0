import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './Buttons.theme';
import { headingTheme } from './Heading.theme';

const theme = extendTheme({
    colors: {
        primary: '#fcbf49',
        backgroundL: '#EDEDED',
        backgroundD: '#22272e',
    },
    components: {
        Button: buttonTheme,
        Heading: headingTheme,
    },

    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
});

export default theme;
