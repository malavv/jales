import './CellLegend.css';

export default function CellLegend({legend, children}) {
    return (
    <div className="cell-wrapper">
        <div className="cell">{children}</div>
        <div className="cell-legend">{legend}</div>
    </div>
    );
}