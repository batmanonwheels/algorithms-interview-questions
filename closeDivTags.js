/*
  Write a function that accepts a string as an argument.

  The String is supposed to be HTML, but all the div elements are missing their closing tags (they have the < and > )

  The function's job is to find and close all the divs in the provided HTML string

  The function should return the entire corrected string.

    "<div><p>Here is a <div> tag</p>"
    "" => "<div></div><div>"
    "<div><div><p>Hello</p><div><div>" => "<div></div><p>Hello</p><div></div>"

*/

const closeDivTags = (str) => {
  // return str.replaceAll('<div><div>', '<div></div>').join('');

  let x = 0;
  return str
    .split('<div>')
    .map((char) => {
      if (char === '') {
        x += 1;
        return x % 2 === 0 ? '</div>' : '<div>';
      } else {
        return char;
      }
    })
    .join('');
};

console.log(closeDivTags('<div><div><p>Hello </p><div><div>'));
