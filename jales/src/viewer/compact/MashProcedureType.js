import './pstack.css';
import './MashProcedureType.css';

import Quantity from "./Quantity";
import MashStep from './MashStep';
import Plabel from './Plabel';

export default function MashProcedureType({name, grain_temperature, notes, mash_steps}) {
    
    return (<div className="mash-proc col">

        <div className='mash-proc-header row'>
            <div>Mash</div>
            <div className='mash-proc-header-name'>{name}</div>
            {notes && <Plabel text={notes} legend="notes" />}
            <Quantity {...grain_temperature} legend="grain temp" />
        </div>
        <ul className='mash-proc-steps'>
            {(mash_steps ?? []).map((step, i) => 
                (<li className='row' key={`${i}-${step.name}`}>
                    <div className='mash-proc-step-idx'>{i}</div>
                    <MashStep {...step} />
                </li>))}
        </ul>
        {notes && <div>{notes}</div>}
    </div>);
}