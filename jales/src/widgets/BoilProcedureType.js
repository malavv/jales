import './general/pstack.css';

import Quantity from "./Quantity";
import Plabel from './general/Plabel';

export default function BoilProcedureType({name, description, notes, pre_boil_size, boil_time}) {
    return (<div className="pstack">

        {boil_time && <Quantity {...boil_time} legend="boil_time" />}
        {name && <Plabel text={name} legend="boil" />}
        
        {pre_boil_size && <Quantity {...pre_boil_size} legend="pre_boil_size" />}

        {description && <Plabel text={description} legend="description" className="auto" />}
        {notes && <Plabel text={notes} legend="notes" />}
    </div>);
}