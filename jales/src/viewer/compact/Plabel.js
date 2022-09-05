import './Plabel.css';

import CellLegend from './CellLegend';

export default function Plabel({text, legend, className}) {
    return (
        <CellLegend legend={legend} className={className}>
            <span className='plabel'>{text}</span>
        </CellLegend>
    );
}