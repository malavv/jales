import './pstack.css';
import './MashProcedureType.css';

import Quantity from "./Quantity";
import MashStep from './MashStep';

export default function MashProcedureType({name, grain_temperature, notes, mash_steps}) {
    
    const steps = (mash_steps ?? []).map((step, i) => 
        (<li className='row' key={`${i}-${step.name}`}>
            <div className='mash-proc-step-idx'>{i}</div>
            <MashStep {...step} />
        </li>));
    
    return (<div className="mash-proc col">

        <div className='mash-proc-header row'>
            <div>Mash</div>
            <div className='mash-proc-header-name'>{name}</div>
            <Quantity {...grain_temperature} legend="grain temp" />
        </div>
        <ul className='mash-proc-steps'>
            {steps}
        </ul>
        {notes && <div>{notes}</div>}
    </div>);
}