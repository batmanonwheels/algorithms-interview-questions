/*
  The marathon starts at sector 1.
  The order of the visited sectors is as follows:
  1 --> 2 --> 3 (end of round 1) --> 4 --> 1 (end of round 2) --> 2 (end of round 3 and the marathon)
  We can see that both sectors 1 and 2 are visited twice and they are the most visited sectors. Sectors 3 and 4 are visited only once.

  2, [2, 1, 2, 1, 2, 1, 2, 1, 2] => [2]
*/

const mostVisitedSectors = (n, rounds) => {
  // let frequency = [];
  // rounds.map((sector) => {
  //   frequency[sector] = rounds.filter((s) => s === sector).length;
  // });
  // return frequency;
  let sortedRounds = rounds.sort();
  let currentMax = 0;
  let res = [];
  for (let i = 1; i <= n; i++) {
    if (
      sortedRounds.lastIndexOf(i) - sortedRounds.indexOf(i) + 1 > currentMax &&
      res.length === 0
    ) {
      console.log('here');
      currentMax = i;
      res.push(i);
    } else if (
      sortedRounds.lastIndexOf(i) - sortedRounds.indexOf(i) + 1 > currentMax &&
      res.length > 0
    ) {
      console.log('two');
      currentMax = i;
      res = [];
      res.push(i);
    } else if (
      sortedRounds.lastIndexOf(i) - sortedRounds.indexOf(i) + 1 ==
      currentMax
    ) {
      console.log('three');
      res.push(i);
    } else {
      continue;
    }
  }
  return res.sort();
};

console.log(mostVisitedSectors(2, [2, 1, 2, 1, 2, 1, 2, 1, 2]));
