import './Quantity.css';

import CellLegend from './CellLegend';

export default function Quantity({value, unit, legend, fixedNum = null}) {
    const fmtVal = fixedNum ? Number(value).toFixed(fixedNum) : value;

    const qty = (
    <div className="qty">
        <div className="qty-val">
            <span>{fmtVal}</span>
        </div>
        <div className="qty-unt">
            <span>{unit}</span>
        </div>
    </div>);

    return (legend ? <CellLegend legend={legend}>{qty}</CellLegend> : qty);
}
