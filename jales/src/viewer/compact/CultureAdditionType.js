import Quantity from './Quantity';
import Plabel from './Plabel';

export default function CultureAdditionType({name, type, form, producer, product_id, producer_id, attenuation, times_cultured, timing, cell_count_billions, amount}) {

    return (<div className="pstack">
        <div className='header'>{name}</div>
        <Plabel text={type} legend={producer || " "} />
        {product_id && <Plabel text={product_id} legend="product_id" />}
        <Plabel text={form} legend="form" />
        <Quantity {...amount} legend="amount" />
        {timing && <Quantity {...timing.duration} legend={timing.use} />}
    </div>);
}