import './pstack.css';

import Plabel from './Plabel';
import Quantity from './Quantity';

export default function HopAdditionType({name, producer, product_id, origin, year, form, alpha_acid, beta_acid, timing, amount}) {
    return (<div className="pstack">
            <Plabel text={name} legend={producer} />

            <Quantity {...timing.time} legend={timing.use} />
            <Quantity {...amount} legend="amount" />
            {alpha_acid && <Quantity {...alpha_acid} legend="alpha_acid" />}
            {beta_acid && <Quantity {...beta_acid} legend="beta_acid" />}
            {form && <Plabel text={form} legend="form" />}
            {year && <Plabel text={year} legend="year" />}
            {origin && <Plabel text={origin} legend="origin" />}
        </div>);
}

// Creating a "unique" string without special char. representing a hop addition.
HopAdditionType.toKey = ({name, amount, timing}) => {
    const qty2txt = ({value, unit}) => `${value}${unit}`;
    return `${qty2txt(amount)}_of_${name}_at_${qty2txt(timing)}`;
};
