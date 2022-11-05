import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './Buttons.theme';
import { headingTheme } from './Heading.theme';
import { textTheme } from './Text.theme';

const theme = extendTheme({
    colors: {
        primary: '#fcbf49',
        backgroundL: '#EDEDED',
        backgroundD: '#22272e',
    },
    components: {
        Button: buttonTheme,
        Heading: headingTheme,
        Text: textTheme,
    },

    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    fonts: {
        heading: `'Alatsi'`,
    },
});

export default theme;
