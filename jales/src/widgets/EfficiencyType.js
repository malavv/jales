import './EfficiencyType.css';

import Quantity from "./Quantity";

export default function EfficiencyType(props) {
    // this can be reordered if needed
    return (<div className="efficiency">
        <div className='efficiency-title'>
            <span>Efficiency</span>
        </div>
        {['conversion', 'lauter', 'mash', 'brewhouse']
            .map(key => (props[key] && <Quantity {...props[key]} key={key} legend={key} fixedNum="1" />))}
    </div>);
}