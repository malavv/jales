import './general/pstack.css';

import Plabel from './general/Plabel';
import Quantity from './Quantity';

export default function FermentableBase(obj) {
    const {name, type, amount, origin, producer, product_id, grain_group, color} = obj;
    const yield_type = obj['yield']; // yield is a reserved keyword.
    return (<div className="pstack">
        <div className='header'>{name}</div>
        <Plabel text={type} legend="type" />
        <Quantity {...amount} legend="amount" />
        <Quantity {...yield_type.potential} legend="yield" />
        <Quantity {...color} legend="color" />
        <Plabel text={origin} legend="origin" />
        {producer && <Plabel text={producer} legend="producer" />}
        {product_id && <Plabel text={product_id} legend="product_id" />}
        {grain_group && <Plabel text={grain_group} legend="grain_group" />}
    </div>);
}