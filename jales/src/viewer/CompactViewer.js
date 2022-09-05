import './CompactViewer.css';

import RecipeType from './compact/RecipeType';

function CompactViewer({content}) {
    return (
    <div className="compact-viewer">
        <RecipeType {...content?.beerjson?.recipes[0]} />
        <div className="row">
            <div className="auto"></div>
            <div className="beerjson-version">{`BeerJSON file version: ${content?.beerjson?.version}`}</div>
        </div>
    </div>);
};

export default CompactViewer;