/**
 * Returns first occurence of exact digit number within a string
 * @param {Object} params
 * @param {number} params.digits - Number of digits to search for   
 * @param {string} params.stringToSearch 
 * @param {?function} params.callback - A nullable callback function that accepts the returned matching string 
 * @returns {String| false | Function} if callback function is not specified, an array is returned
 */
function getExactDigitNumberWithinAString(params){
    let {digits, stringToSearch, callback = null} = params
    //returns build up the Regular expression
    stringToSearch = stringToSearch.replace(/\"/g,'\\"');
    let RegXP = new RegExp('\\D\(\\d{'+digits+'}\)\\D');

    //return matching expression of false if none
    if(RegXP.test(stringToSearch)){
        let matches = stringToSearch.match(RegXP);
        let cleaned_matches = matches[1];
        if(callback === null || callback === undefined) return cleaned_matches;
        
        return callback(cleaned_matches);
    }
    if(callback === null || callback === undefined) return false;
    
    return callback(false);
}

/**
 * Returns all occurence of exact digit numbers within a string
 * @param {Object} params
 * @param {number} params.digits - Number of digits to search for
 * @param {string} params.stringToSearch
 * @param {?function} params.callback - A nullable callback function that accepts the returned matching string
 * @returns {Array | false | Function} if callback function is not specified, an array is returned or false
 */
function findExactDigitNumbersWithinAString(params){
    let {digits, stringToSearch, callback = null} = params
    stringToSearch = stringToSearch.replace(/\"/g,'\\"');
    let RegXP = new RegExp('\\D\(\\d{'+digits+'}\)\\D', 'g');

    //return matching expression of false if none
    if(RegXP.test(stringToSearch)){
        let matches = stringToSearch.match(RegXP);
        let cleaned_matches = matches.map(function(match){
            let regx = new RegExp('\(\\d{'+digits+'}\)');
            return match.match(regx)[1];
        })
        if(callback === null || callback === undefined){
        	return cleaned_matches
        }
        return callback(cleaned_matches);
    }
    if(callback === null || callback === undefined){
      return false;
    }
    return callback(false);
}