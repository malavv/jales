import './Quantity.css';

export default function Quantity({val, unit, fixedNum = null}) {
    const fmtVal = fixedNum ? Number(val).toFixed(fixedNum) : val;

    return (<div className="qty">
        <div className="qty-val">{fmtVal}</div>
        <div className="qty-unt">{unit}</div>
    </div>)
}