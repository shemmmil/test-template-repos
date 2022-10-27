// const readFile = require('fs/promises');
// const json = JSON.parse(

// );

// const loadFile = async (pathname) => {
//   try {
//     const file =  await readFile(
//       new URL(pathname, import.meta.url)
//     )
//   }
// }

(() => {
  try {
    const file = require("./json");
  } catch (err) {
    console.log("File not found ");
  }
})();
