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

function Footer({modes, mode, status, beerJsonVer, onModeChange}) {

    const handleModeClick = (e) => {
        const cmode = e.target.getAttribute("value");
        if (mode === cmode)
            return;
        onModeChange(cmode);
    }

    return (
        <footer>
            <div className="control">
                <div className={`status-light light-${status}`} />
                <div className="viewmode-ctl">
                    {joinWithJsx(
                        modes.map(m => (
                        <span key={m}
                            value={m}
                            active={String(mode === m)} 
                            onClick={handleModeClick}>{m}</span>)),
                        (i) => (<span key={i}> | </span>))}
                </div>
            </div>

            <div className="Context">
                <span>{`BeerJSON ver: ${beerJsonVer}`}</span>
                <a href='https://github.com/beerjson/beerjson' target="_blank" rel="noreferrer">BeerJSON Github</a>
            </div>
        </footer>
    );
}

export default Footer