import './Quantity.css';

export default function Quantity({val, unit, fixedNum = null}) {
    // (5.5).toFixed(1).padStart(4, ' ')

    return (<div className="qty">
        <div className="qty-val">{fixedNum ? val: Number(val).toFixed(fixedNum)}</div>
        <div className="qty-unt">{unit}</div>
    </div>)
}