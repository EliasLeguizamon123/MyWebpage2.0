import { useColorMode } from '@chakra-ui/react';
import React from 'react';
import BGLight from '../../../assets/backgroundLight.mp4';
import BGDark from '../../../assets/backgroundDark.mp4';
function VideoBackground() {
    const { colorMode } = useColorMode();

    return (
        <video
            autoPlay
            loop
            muted
            id="bg"
            src={colorMode === 'light' ? BGLight : BGDark}
            style={{
                position: 'fixed',
                zIndex: '-1',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'blur(2px)',
            }}
        />
    );
}

export default VideoBackground;
