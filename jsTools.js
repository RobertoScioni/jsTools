/**
 * in this function i'll call out other stuff to test it out
 * @param {*} element 
 */
const testClick=(event)=>{
    parentQuerySelector(event.target,"#test")
}

/**
 * @name parentQuerySelector
 * @param {*} element - the element of witch we want to climb the ancestry
 * @param {*} query - the css selector
 * @description returns the first ancestor of element to match the query
 */
const parentQuerySelector=(element,query)=>{
    element.parentNode

}