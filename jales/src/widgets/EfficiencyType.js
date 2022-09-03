import './EfficiencyType.css';

import Quantity from "./Quantity";

export default function EfficiencyType(props) {
    // this can be reordered if needed
    const cmpts = ['conversion', 'lauter', 'mash', 'brewhouse'].map(key => {
        return (props[key] && 
            <div key={key} className="eff-qty">
                <Quantity {...props[key]} fixedNum="1" />
                <div>{key}</div>
            </div>);
    });

    return (<div className="efficiency">
        <div>
            <span>Efficiency</span>
        </div>
        {cmpts}
    </div>);
}