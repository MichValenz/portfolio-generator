const fs = require("fs");

const generatePage = require("./src/page-template.js");

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

/////////////////NOTES-START//////////////////////
// const printProfileData = (profileDataArr) => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log("================");

//   // Is the same as this...
// profileDataArr.forEach(profileItem => console.log(profileItem));

// };

// printProfileData(profileDataArgs);

///////////////NOTES-END////////////////////////////


//ABOUT THIS CODE- it created the html file!
fs.writeFile("index.html", generatePage(name, github), (err) => {
  if (err) throw err;

  console.log("Portfolio complete! Check out index.html to see the output!");
});
