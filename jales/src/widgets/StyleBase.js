import './StyleBase.css';

/* From BeerJSON
    name: string
    category: string
    category_number?: number
    style_letter?: string
    style_guide: string
    type: StyleCategories
*/

/* Example
{"name": "Specialty",
 "category": "Experimental and Historic",
 "category_number": 24,
 "style_letter": "A",
 "style_guide": "BJCP 1999",
 "type": "beer"}
*/

// [Beer] Specialty; Experiemental and Historic (24A BJCP 1999)

export default function StyleBase({type, name, category, category_number, style_letter, style_guide}) {
    return (<div className='style-base'>
        <div className="style-deta">{`${name}; ${category} (${category_number}${style_letter} ${style_guide})`}</div>
        <div className="style-type">{type}</div>
    </div>);
}