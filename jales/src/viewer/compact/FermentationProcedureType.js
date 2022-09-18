import Quantity from './Quantity';
import Plabel from './Plabel';

function FermentationStepType({name, description, start_temperature, end_temperature, step_time, free_rise, start_gravity, end_gravity, start_ph, end_ph,vessel}) {
    return(
        <div className="row">
            <Plabel text={name} legend="name" />
            {description && <Plabel text={description} legend="description" />}
            {start_temperature && <Quantity {...start_temperature} legend="start_temperature" />}
            {end_temperature && <Quantity {...end_temperature} legend="end_temperature" />}
            {step_time && <Quantity {...step_time} legend="step_time" />}
            {free_rise && <Plabel text={free_rise? "Yes" : "No"} legend="free_rise" />}
            {start_gravity && <Quantity {...start_gravity} legend="start_gravity" />}
            {end_gravity && <Quantity {...end_gravity} legend="end_gravity" />}
            {start_ph && <Quantity {...start_ph} legend="start_ph" />}
            {end_ph && <Quantity {...end_ph} legend="end_ph" />}
            {vessel && <Plabel text={vessel} legend="vessel" />}
        </div>
    )
}

export default function FermentationProcedureType({name, description, notes, fermentation_steps}) {

    return (<div className="col">

        <div className='row'>
            <div>Fermentation</div>
            <div>{name}</div>
            {description && <Plabel text={description} legend="description" />}
            {notes && <Plabel text={notes} legend="notes" />}
        </div>
        <ul>
            {(fermentation_steps ?? []).map((step, i) => 
                (<li className='row' key={`${i}-${step.name}`}>
                    <div>{i}</div>
                    <FermentationStepType {...step} />
                </li>))}
        </ul>
    </div>);
}