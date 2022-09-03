import './general/pstack.css';

import Quantity from "./Quantity";

export default function EfficiencyType({conversion, lauter, mash, brewhouse}) {
    return (<div className="pstack">
        <div className='header'>Efficiency</div>
        {conversion && <Quantity {...conversion} legend="conversion" fixedNum="1" />}
        {lauter && <Quantity {...lauter} legend="lauter" fixedNum="1" />}
        {mash && <Quantity {...mash} legend="mash" fixedNum="1" />}
        {brewhouse && <Quantity {...brewhouse} legend="brewhouse" fixedNum="1" />}
    </div>);
}