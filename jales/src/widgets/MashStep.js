import './general/pstack.css';

import Quantity from './Quantity';

export default function MashStep({name, type, amount, step_temperature, step_time, ramp_time, end_temperature, description, water_grain_ratio, infuse_temperature, start_ph, end_ph}) {
    return (<div>
        <div>{name}</div>
        {description && <div>description</div>}
        <div>{type}</div>

        {amount && <Quantity {...amount} legend="amount" />}
        {step_temperature && <Quantity {...step_temperature} legend="step_temperature" />}
        {step_time && <Quantity {...step_time} legend="step_time" />}
        {ramp_time && <Quantity {...ramp_time} legend="ramp_time" />}
        {end_temperature && <Quantity {...end_temperature} legend="end_temperature" />}
        {water_grain_ratio && <Quantity {...water_grain_ratio} legend="water_grain_ratio" />}
        {infuse_temperature && <Quantity {...infuse_temperature} legend="infuse_temperature" />}
        {start_ph && <Quantity {...start_ph} legend="start_ph" />}
        {end_ph && <Quantity {...end_ph} legend="end_ph" />}
    </div>);
}