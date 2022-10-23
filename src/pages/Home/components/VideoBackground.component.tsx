import React from 'react';
import BGDark from '../../../assets/backgroundDark.mp4';

function VideoBackground() {
    return (
        <video
            autoPlay
            loop
            muted
            id="bg"
            src={BGDark}
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
