import './Viewer.css';

import RecipeType from './RecipeType';

export default function Viewer({content}) {
    return (
    <div className="compact-viewer">
        <RecipeType {...content?.beerjson?.recipes[0]} />
    </div>);
};