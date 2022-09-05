import './StyleBase.css';

// [Beer] Specialty; Experiemental and Historic (24A BJCP 1999)
export default function StyleBase({type, name, category, category_number, style_letter, style_guide}) {
    return (<div className='style-base'>
        <div className="style-deta">{`${name}; ${category} (${category_number}${style_letter} ${style_guide})`}</div>
        <div className="style-type">{type}</div>
    </div>);
}