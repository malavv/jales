import './CellLegend.css';

export default function CellLegend({legend, children, className}) {
    return (
    <div className={`cell-wrapper ${className}`}>
        <div className="cell">{children}</div>
        <div className="cell-legend">{legend}</div>
    </div>
    );
}