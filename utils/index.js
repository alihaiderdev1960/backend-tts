// export const capitalizeFirstLetter = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// };

// export const capitalizeFirstLetterOfEachWordInAString = (string) => {
//   return string
//     .split(" ")
//     .map((word) => {
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// };

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const capitalizeFirstLetterOfEachWordInAString = (string) => {
  return string
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};

module.exports = {
  capitalizeFirstLetter,
  capitalizeFirstLetterOfEachWordInAString,
};
