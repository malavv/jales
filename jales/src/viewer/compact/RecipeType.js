import './RecipeType.css';

import Quantity from "./Quantity";
import EfficientyType from './EfficiencyType';
import StyleBase from './StyleBase';
import IngredientsType from './IngredientsType';
import MashProcedureType from './MashProcedureType';
import BoilProcedureType from './BoilProcedureType';
import Plabel from './Plabel';
import FermentationProcedureType from './FermentationProcedureType';
import PackagingProcedureType from './PackagingProcedureType';

export default function RecipeType(props) {
    const {
        name,
        type,
        author,
        coauthor,
        created,
        batch_size,
        efficiency,
        style,
        ingredients,
        mash,
        notes,
        original_gravity,
        final_gravity,
        alcohol_by_volume,
        ibu_estimate,
        color_estimate,
        beer_pH,
        carbonation,
        apparent_attenuation,
        fermentation,
        packaging,
        boil,
        taste,
        calories_per_pint } = props;

    return (
        <div className='recipe col'>
            <section className='row'>
                <div className='recipe-section-head'>
                    Recipe
                </div>
                <div className='recipe-section-main'>
                    <div className='row'>
                        <Plabel text={name} legend={author} className="auto recipe-title"/>
                        <div className='recipe-type'>{type}</div>
                    </div>
                    {coauthor && <div className='recipe-summ-cell'>{coauthor}</div>}
                    {style && <StyleBase {...style} />}
                    <div className='recipe-summ row'>
                        <Quantity {...batch_size} legend="batch_size" />
                        {original_gravity && <Quantity {...original_gravity} legend="original_gravity" />}
                        {final_gravity && <Quantity {...final_gravity} legend="final_gravity" />}
                        {alcohol_by_volume && <Quantity {...alcohol_by_volume} legend="alcohol_by_volume" />}
                        {ibu_estimate && <Quantity {...ibu_estimate?.amount} legend="ibu_estimate" />}
                        {color_estimate && <Quantity {...color_estimate} legend="color_estimate" />}
                        {beer_pH && <Quantity {...beer_pH} legend="beer_pH" />}
                        {apparent_attenuation && <Quantity {...apparent_attenuation} legend="apparent_attenuation" />}
                        {taste && <Plabel text={taste?.notes} legend={`Rating of ${taste?.rating}`} />}
                    </div>
                    {notes && <div className='recipe-summ-cell'>{notes}</div>}
                    {carbonation && <div>{carbonation}</div>}
                    {created && <div>{created}</div>}
                    {calories_per_pint && <div>{calories_per_pint}</div>}
                </div>
            </section>

            <section className='row'>
                <div className='recipe-section-head'>
                    Ingredients
                </div>
                <div className='recipe-section-main'>
                    <IngredientsType {...ingredients} />
                </div>
            </section>

            {mash &&
            <section className='row'>
                <div className='recipe-section-head'>
                    Mash
                </div>
                <div className='recipe-section-main'>
                    <MashProcedureType {...mash} />
                </div>
            </section>
            }

            {boil &&
                <section className='row'>
                    <div className='recipe-section-head'>
                        Boil
                    </div>
                    <div className='recipe-section-main'>
                        <BoilProcedureType {...boil} legend="boil" />
                    </div>
                </section>
            }

            { efficiency &&
            <section className='row'>
                <div className='recipe-section-head'>
                    Eff.
                </div>
                <div className='recipe-section-main'>
                    <EfficientyType {...efficiency} />
                </div>
            </section>
            }

            { fermentation &&
            <section className='row'>
                <div className='recipe-section-head'>
                    Ferment.
                </div>
                <div className='recipe-section-main'>
                    <FermentationProcedureType {...fermentation} />
                </div>
            </section>
            }

            { packaging &&
            <section className='row'>
                <div className='recipe-section-head'>
                    Packaging
                </div>
                <div className='recipe-section-main'>
                    <PackagingProcedureType {...packaging} />
                </div>
            </section>
            }

        </div>
    );
}