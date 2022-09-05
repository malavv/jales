import Quantity from './Quantity';
import Plabel from './Plabel';

export default function CultureAdditionType({name, type, form, producer, producer_id, attenuation, times_cultured, timing, cell_count_billions, amount}) {
    return (<div className="pstack">
        <div className='header'>{type}</div>
        <Plabel text={name} legend={producer} />
        <Plabel text={form} legend="form" />
        <Quantity {...amount} legend="amount" />
    </div>);
}