import './CellLegend.css';

export default function CellLegend({legend, children, className}) {

    const tt = ['cell-wrapper', className].filter(e => e).join(" ");
    return (
    <div className={tt}>
        <div className="cell">{children}</div>
        <div className="cell-legend">{legend}</div>
    </div>
    );
}