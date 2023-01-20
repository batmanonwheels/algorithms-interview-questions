/*
  In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

  The string has the following conditions to be alphanumeric:

  At least one character ("" is not valid)
  Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
  No whitespaces / underscore

    alphanumeric("Mazinkaiser") => true)
    alphanumeric("hello world_") => false)
    alphanumeric("PassW0rd") => true)
    alphanumeric("     ") => false)
*/

// Compare string input to regex statement, looking for non-alphanumeric characters,
// underscores, and whitespace.If found, returns false, otherwise returns true

const alphanumeric = (s) => !/[\\W_ ]/.test(s);

console.log(alphanumeric('hello world_'));
