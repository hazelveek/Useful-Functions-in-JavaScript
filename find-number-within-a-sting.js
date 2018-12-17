/**
 * Find exact digit number within a string
 * @param {number} digits 
 * @param {string} string 
 * @param {function} callback
 */
function getExactDigitNumberWithinAString(digits, string, callback){
    //returns build up the Regular expression
    let RegXP = new RegExp('\\D\(\\d{'+digits+'}\)\\D');

    //return matching expression of false if none
    if(RegXP.test(string)){
        let matches = string.match(RegXP);
        return callback(matches[1]);
    }
    return callback(false);
}

/**
 * Returns all occurence of exact digit numbers within a string
 * @param {number} digits 
 * @param {string} string 
 * @param {function} callback
 */
function findExactDigitNumbersWithinAString(digits, string, callback){
    let RegXP = new RegExp('\\D\(\\d{'+digits+'}\)\\D', 'g');

    //return matching expression of false if none
    if(RegXP.test(string)){
        let matches = string.match(RegXP);
        let cleaned_matches = matches.map(function(match){
            let regx = new RegExp('\(\\d{'+digits+'}\)');
            return match.match(regx)[1];
        })
        return callback(cleaned_matches);
    }
    return callback(false);
}