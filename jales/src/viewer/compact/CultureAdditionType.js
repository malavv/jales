import Quantity from './Quantity';
import Plabel from './Plabel';

export default function CultureAdditionType({name, type, form, producer, producer_id, attenuation, times_cultured, timing, cell_count_billions, amount}) {

    return (<div className="pstack">
        
        <Plabel text={name} legend={producer || " "} />
        <Plabel text={type} legend="type" />
        <Plabel text={form} legend="form" />
        <Quantity {...amount} legend="amount" />
        {timing && <Quantity {...timing.duration} legend={timing.use} />}
    </div>);
}