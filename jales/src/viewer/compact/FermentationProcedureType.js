import './FermentationProcedureType.css';

import Plabel from './Plabel';
import FermentationStepType from './FermentationStepType';

export default function FermentationProcedureType({name, description, notes, fermentation_steps}) {


    const header = (<div className='row ferment-header'>
        <div className='ferment-header-name'>{name}</div>
        {description && <Plabel text={description} legend="description" />}
        {notes && <Plabel text={notes} legend="notes" />}
    </div>);

    return (<div className="col">
        {header}
        
        <ul className='ferment-steps'>
            {(fermentation_steps ?? []).map((step, i) => 
                (<li className='row' key={`${i}-${step.name}`}>
                    <div className='ferment-step-idx'>{i}</div>
                    <FermentationStepType {...step} />
                </li>))}
        </ul>
    </div>);
}