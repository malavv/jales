import './Plabel.css';

import CellLegend from './CellLegend';

export default function Plabel({text, legend}) {
    return (
        <CellLegend legend={legend}>
            <span className='plabel'>{text}</span>
        </CellLegend>
    );
}