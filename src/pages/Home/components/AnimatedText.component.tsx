import { useSpring, animated } from 'react-spring';
import { title } from '../../../models/title.model';

function AnimatedText(props: title) {
    const animatedStyles = useSpring({
        loop: true,
        to: [{ color: '#75aee0' }, { color: '#E2D475' }],
        from: { color: '#FAFAFA' },
        config: {
            duration: 500,
        },
    });

    return <animated.div style={animatedStyles}>{props.text}</animated.div>;
}

export default AnimatedText;
