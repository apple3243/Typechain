// @ts-check 
// This comment is used when a project use both ts and js.
// Used for Ts file to check JS file. 

/**
 * Initialize the project
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config){
    return true;
}

/**
 * Exit the program
 * @param {number} code 
 * @returns number
 */

export function exit(code){
    return code + 1;
}