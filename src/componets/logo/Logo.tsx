import { Icon } from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';

export const Logo = () => {
    return <a onClick={() => { scroll.scrollToTop() }}>
        <Icon width='35' height='35' viewBox='-5 -5 35 35' iconId={'home'} />
    </a>

};


