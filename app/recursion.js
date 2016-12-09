exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

// searchdir
// make a list to hold files
// look through the directory
//   if you find a file
//     add to list
//   if you find a directory
//     call searchdir for the directory
//     add the list to returns to our list
//   return list
//

// listFiles: function(data, dirName) {
//       // note: "acceptable path"/"acceptable dirs" means that the directory is the specified
//       // dirName, or is a subdirectory/nested subdirectory of dirName
//
//       // create the master filesList array
//       var filesList = filesList || [];
//       var acceptableDirs = [dirName];
//       // make sure that there is a "files" subdirectory to examine
//       if (data.files != undefined) {
//
//         // iterate through all of the items in the "files" subdirectory
//         for (var i = 0; i < data.files.length; i++) {
//
//           // if the item isn't a string, it's an object, and thus must be a subdirectory
//           if (typeof data.files[i] === "object") {
//             // if dirName is specified, add subdirs in the dirName's path
//             if ((dirName != undefined) && (acceptableDirs.includes(data.files[i].dir))) {
//               if (acceptableDirs.includes(data.files[i].dir.dir != undefined)) {
//                 // add subdirectories in same path to acceptable list
//                 acceptableDirs.push(data.files[i].dir.dir);
//               } // down the [acceptable] rabbit hole
//               filesList.push(this.listFiles(data.files[i]));
//             } else if (dirName === undefined) {  // dirName not specified, Inception time
//               filesList.push(this.listFiles(data.files[i]));
//             }
//               // if data.files.dir is not in the acceptable path, do nothing
//           // else the item we are examining is a file, so push it to the filesList array
//           // only do this if the dirName wasn't specified, or the files are in an acceptable path
//           } else if ((dirName === undefined) || (acceptableDirs.includes(data.dir))) {
//             filesList.push(data.files[i]);
//           }
//         }
//       }
//       // flatten all of the nested arrays so our final array will be a single-level array
//       // otherwise we will end up with e.g. ["index.html", Array[5], Array[2]]
//       var filesList = [].concat.apply([], filesList);
//       return filesList;
//   },
//








    var fileList = [];
    for(var propt in data) {
      if (data.hasOwnProperty(propt)) {
        fileList.push(propt + ": " + obj[propt]);
      }
    }
    return fileList;
  },

  permute: function(arr) {
    // Optional Challenge
  },

  fibonacci: function(n) {
    if(n <= 2) {
      return 1;
    } else {
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  },

  validParentheses: function(n) {
    // Optional Challenge
  }
};
