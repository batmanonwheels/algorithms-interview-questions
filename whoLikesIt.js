// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this" DONE
// ["Peter"]                         -->  "Peter likes this" DONE
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this" DONE
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
  switch (names.length) {
    case 0:
      str = 'no one likes this';
      break;
    case 1:
      str = `${names.shift()} likes this`;
      break;
    case 2:
      str = `${names.shift()} and ${names.shift()} like this`;
      break;
    case 3:
      str = `${names.shift()}, ${names.shift()} and ${names.shift()} like this`;
      break;
    default:
      str = `${names.shift()}, ${names.shift()} and ${
        names.length
      } others like this`;
      break;
  }

  return str;
}

console.log(likes(['Alex']));
