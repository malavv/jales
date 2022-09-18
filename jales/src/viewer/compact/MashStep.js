import './pstack.css';
import './MashStep.css';

import Quantity from './Quantity';

export default function MashStep({name, type, amount, step_temperature, step_time, ramp_time, end_temperature, description, water_grain_ratio, infuse_temperature, start_ph, end_ph}) {
    return (
        <div className="mash-step row">
            <div className="mash-head col">
                <div>{name}</div>
                <div className="mash-desc">{description}</div>
                <div>{type}</div>
            </div>
            <div className="mash-prop">
                <table>
                    <tbody>
                        <tr>
                            <td>{step_time && <Quantity {...step_time} legend="step_time" />}</td>
                            <td>{step_temperature && <Quantity {...step_temperature} legend="step_temperature" />}</td>
                            <td>{water_grain_ratio && <Quantity {...water_grain_ratio} legend="water_grain_ratio" />}</td>
                            <td>{amount && <Quantity {...amount} legend="amount" />}</td>
                        </tr>
                        <tr>
                            <td>{infuse_temperature && <Quantity {...infuse_temperature} legend="infuse_temperature" />}</td>
                            <td>{end_temperature && <Quantity {...end_temperature} legend="end_temperature" />}</td>
                            <td>{ramp_time && <Quantity {...ramp_time} legend="ramp_time" />}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>{start_ph && <Quantity {...start_ph} legend="start_ph" />}</td>
                            <td>{end_ph && <Quantity {...end_ph} legend="end_ph" />}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}