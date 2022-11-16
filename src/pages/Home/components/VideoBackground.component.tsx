import { Box, useColorMode } from '@chakra-ui/react';
import BGLight from '../../../assets/backgroundLight.gif';
import BGDark from '../../../assets/backgroundDark.gif';
function VideoBackground() {
    const { colorMode } = useColorMode();

    return (
        <Box
            style={{
                backgroundImage:
                    colorMode === 'light'
                        ? `url(${BGLight})`
                        : `url(${BGDark})`,
                position: 'fixed',
                zIndex: '-1',
                width: '100%',
                height: '100%',
                filter: 'blur(2px)',
                backgroundSize: 'cover',
            }}
        />
    );
}

export default VideoBackground;
