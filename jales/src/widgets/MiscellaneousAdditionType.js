import Quantity from './Quantity';
import Plabel from './general/Plabel';

export default function MiscellaneousAdditionType({name, type, amount, timing}) {
    return (<div className="pstack">
        <div className='header'>{name}</div>
        <Plabel text={type} legend="type" />
        <Quantity {...amount} legend="amount" />
        <Quantity {...timing.time} legend={`at`} />
        {timing.duration && <Quantity {...timing.duration} legend={`for`} />}
        {timing.use && <Plabel text={timing.use} legend="timing type" />}
    </div>);
}