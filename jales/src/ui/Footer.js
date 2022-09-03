import React from 'react';

import { joinWithJsx } from '../util/Jsx';

import './Footer.css';

// I wanted to not put a color in, but traffic light is easiest and shortest for dev.
// That doesn't mean the actual color should be this one.
export const FooterStatus = {
    green: 'ok',
    yellow: 'warn',
    red: 'error',
}

const tmpContexts = [
    {lbl: 'No Context Yet'},
    {lbl: 'No Context Yet'},
];

function Footer(props) {

    const handleModeClick = (e) => {
        const mode = e.target.getAttribute("value");
        if (mode === props.mode)
            return;
        props.onModeChange(mode);
    }

    return (
        <footer>
            <div className="control">
                <div className={`status-light light-${props.status}`} />
                <div className="viewmode-ctl">
                    {joinWithJsx(
                        props.modes.map(m => (
                        <span key={m}
                            value={m}
                            active={String(props.mode === m)} 
                            onClick={handleModeClick}>{m}</span>)),
                        (i) => (<span key={i}> | </span>))}
                </div>
            </div>

            <div className="Context">
                {tmpContexts.map((el, i) => (<span key={i}>{el.lbl}</span>))}
                <a href='https://github.com/beerjson/beerjson'>BeerJSON Github</a>
            </div>
        </footer>
    );
}

export default Footer