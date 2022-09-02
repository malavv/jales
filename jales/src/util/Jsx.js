/**
 * Joins an Array of JSX obj with a newly created JSX. ex: separator.
 * @param {Array} objs 
 * @param {function} sepMakerByIdx 
 * @returns Separated list of objects
 */
export function joinWithJsx(objs, sepMakerByIdx) {
    return objs.flatMap((el, i) => i === 0 ? [el] : [sepMakerByIdx(i), el]);
}