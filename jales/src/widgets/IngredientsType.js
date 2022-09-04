import './IngredientsType.css';

import FermentableBase from './FermentableBase';
import MiscellaneousAdditionType from './MiscellaneousAdditionType';
import CultureAdditionType from './CultureAdditionType';

export default function IngredientsType({fermentable_additions, hop_additions, miscellaneous_additions, culture_additions, water_additions}) {
    return (
    <div className='ingredients'>
        <section>
            <header>fermentable_additions</header>
            <div>
                {fermentable_additions.map(el => <FermentableBase key={el.name} {...el} />)}
            </div>
        </section>
        <section>
            <header>miscellaneous_additions</header>
            <div>
                {miscellaneous_additions.map(el => <MiscellaneousAdditionType key={el.name} {...el} />)}
            </div>
        </section>
        <section>
            <header>culture_additions</header>
            <div>
                {culture_additions.map(el => <CultureAdditionType key={el.name} {...el} />)}
            </div>
        </section>
    </div>);
}