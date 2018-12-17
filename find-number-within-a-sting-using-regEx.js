/**
 * Returns first occurence of exact digit number within a string
 * @param {number} digits 
 * @param {string} stringToSearch 
 * @param {function} callback
 */
function getExactDigitNumberWithinAString(digits, stringToSearch, callback){
    //returns build up the Regular expression
    stringToSearch = stringToSearch.replace(/\"/g,'\\"');
    let RegXP = new RegExp('\\D\(\\d{'+digits+'}\)\\D');

    //return matching expression of false if none
    if(RegXP.test(stringToSearch)){
        let matches = stringToSearch.match(RegXP);
        return callback(matches[1]);
    }
    return callback(false);
}

/**
 * Returns all occurence of exact digit numbers within a string
 * @param {number} digits 
 * @param {string} stringToSearch 
 * @param {function} callback
 */
function findExactDigitNumbersWithinAString(digits, stringToSearch, callback){
    stringToSearch = stringToSearch.replace(/\"/g,'\\"');
    let RegXP = new RegExp('\\D\(\\d{'+digits+'}\)\\D', 'g');

    //return matching expression of false if none
    if(RegXP.test(stringToSearch)){
        let matches = stringToSearch.match(RegXP);
        let cleaned_matches = matches.map(function(match){
            let regx = new RegExp('\(\\d{'+digits+'}\)');
            return match.match(regx)[1];
        })
        return callback(cleaned_matches);
    }
    return callback(false);
}