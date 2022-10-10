import'./PackagingProcedureType.css';
import Plabel from './Plabel';
import Quantity from './Quantity';

function PackagingVesselType(props) {
    let {
        name,
        type,
        description,
        package_date,
        start_temperature,
        end_temperature,
        step_time,
        start_gravity,
        end_gravity,
        start_ph,
        end_ph,
        carbonation,
        vessel_volume,
        vessel_quantity,
        graphics
    } = props;
    return (
    <div className="row">
        <Plabel text={name} legend="name" />
        {type && <Plabel text={type} legend="type" />}
        {description && <Plabel text={description} legend="description" />}
        {package_date && <Plabel text={package_date} legend="package_date" />}
        {start_temperature && <Quantity {...start_temperature} legend="start_temperature" />}
        {end_temperature && <Quantity {...end_temperature} legend="end_temperature" />}
        {step_time && <Quantity {...step_time} legend="step_time" />}
        {start_gravity && <Quantity {...start_gravity} legend="start_gravity" />}
        {end_gravity && <Quantity {...end_gravity} legend="end_gravity" />}
        {start_ph && <Quantity {...start_ph} legend="start_ph" />}
        {end_ph && <Quantity {...end_ph} legend="end_ph" />}
        {carbonation && <Plabel text={carbonation} legend="carbonation" />}
        {vessel_volume && <Quantity {...vessel_volume} legend="vessel_volume" />}
        {vessel_quantity && <Plabel text={vessel_quantity} legend="vessel_quantity" />}
    </div>);
}

export default function PackagingProcedureType({name, packaged_volume, description, notes, packaging_vessels}) {
    const header = (<div className='row packaging-header'>
        <div className='packaging-header-name'>{name}</div>
        {packaged_volume && <Quantity {...packaged_volume} legend="packaged_volume" />}
        {description && <Plabel text={description} legend="description" />}
        {notes && <Plabel text={notes} legend="notes" />}
    </div>);

    return (<div className="col">
        {header}
        
        <ul className='packaging-vessels'>
            {(packaging_vessels ?? []).map((vessel, i) => 
                (<li className='row' key={`${i}-${vessel.name}`}>
                    <div className='packaging-vessel-idx'>{i}</div>
                    <PackagingVesselType {...vessel} />
                </li>))}
        </ul>
    </div>);
}