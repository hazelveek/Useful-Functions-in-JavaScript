const fs = require('fs');

/**
 * Recursively get an array of paths of all files in {dirname}
 * @param {string} dirname 
 * @return {Array}
 */
function getFilepathsInDir(dirname){
    let filePaths = [];
    fs.readdirSync(dirname).forEach(file => {
        if(file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"){
          filePaths.push(path.join(dirname, file));
        }else if(fs.lstatSync(`${dirname}/${file}`).isDirectory()){
          let sub_paths = getFilepathsInDir(`${dirname}/${file}`);
          filePaths.push(...sub_paths);
        }
    });
    return filePaths;
}