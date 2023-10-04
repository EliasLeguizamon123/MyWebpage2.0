import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './Buttons.theme';
import { headingTheme } from './Heading.theme';
import { textTheme } from './Text.theme';
import { badgesTheme } from './Badges.theme';
const theme = extendTheme({
    colors: {
        primary: '#fcbf49',
        backgroundL: '#EDEDED',
        backgroundD: '#22272e',
        border: '#A9A9A9',
    },
    components: {
        Button: buttonTheme,
        Heading: headingTheme,
        Text: textTheme,
        Badge: badgesTheme,
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
