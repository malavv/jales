import './CompactViewer.css';

import RecipeType from './compact/RecipeType';

function CompactViewer({content}) {
    return (
    <div className="compact-viewer">
        <RecipeType {...content?.beerjson?.recipes[0]} />
        <div className="row">
            <div className="auto"></div>
        </div>
    </div>);
};

export default CompactViewer;