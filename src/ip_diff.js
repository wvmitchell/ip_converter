// Research: 
// Four Parts to IP address (called "octets"):
// octet1.octet2.octet3.octet4

// Each octet is calculated differently:
// - octet 1: 2^24
// - octet 2: 2^16
// - octet 3: 2^8
// - octet 4: 2^0 (1)

// Summary: 
// You subtract the nums in the same octet and then multiply that difference by the numbers above. You sum up all the nums for the total difference.

// Steps:
// Split IP addresses into arrays
// Calculate the diff for each octet
// Sum up all diffs
// return absolute zero of total (in case the second address is larger than the first)

// No Looping:
// const ipDiff = (ip1, ip2) => {
//   const octetCalculations = {
//     1: Math.pow(2, 24),
//     2: Math.pow(2, 16),
//     3: Math.pow(2, 8),
//     4: Math.pow(2, 0)
//   }

//   const [ip1octet1, ip1octet2, ip1octet3, ip1octet4] = ip1.split('.');
//   const [ip2octet1, ip2octet2, ip2octet3, ip2octet4] = ip2.split('.');

//   const octet1Diff = (ip1octet1 - ip2octet1) * octetCalculations[1];
//   const octet2Diff = (ip1octet2 - ip2octet2) * octetCalculations[2];
//   const octet3Diff = (ip1octet3 - ip2octet3) * octetCalculations[3];
//   const octet4Diff = (ip1octet4 - ip2octet4) * octetCalculations[4];

//   const total = octet1Diff + octet2Diff + octet3Diff + octet4Diff;

//   return Math.abs(total);
// }

// Final Refactor:
const ipDiff = (ip1, ip2) => {
  const octetPowers = {
    1: 24,
    2: 16,
    3: 8,
    4: 0
  }
  
  const ip1Octets = ip1.split('.');
  const ip2Octets = ip2.split('.');

  let total = ip1Octets.reduce((sum, ip1Octet, i) => {
    sum +=  (ip1Octet - ip2Octets[i]) * Math.pow(2, octetPowers[i + 1]);
    return sum;
  }, 0);

  return Math.abs(total);
}

module.exports = { ipDiff };
