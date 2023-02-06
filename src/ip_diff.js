// Research: 
// Four Parts to IP address (called "octets"):
// octet4.octet3.octet2.octet1

// Each octet is calculated differently:
// - octet 4: 2^24
// - octet 3: 2^16
// - octet 2: 2^8
// - octet 1: 2^0 (1)

// Summary: 
// You subtract the nums in the same octet and then multiply that difference by the numbers above. You sum up all the nums for the total difference.

// Steps:
// Split IP addresses into arrays
// Calculate the diff for each octet
// Sum up all diffs
// return absolute zero of total (in case the second address is larger than the first)

// Code:
const ipDiff = (ip1, ip2) => {
  const [ip1octet4, ip1octet3, ip1octet2, ip1octet1] = ip1.split('.');
  const [ip2octet4, ip2octet3, ip2octet2, ip2octet1] = ip2.split('.');


  const octet4Diff = (ip1octet4 - ip2octet4) * Math.pow(2, 24);
  const octet3Diff = (ip1octet3 - ip2octet3) * Math.pow(2, 16);
  const octet2Diff = (ip1octet2 - ip2octet2) * Math.pow(2, 8);
  const octet1Diff = ip1octet1 - ip2octet1;

  const total = octet4Diff + octet3Diff + octet2Diff + octet1Diff;

  return Math.abs(total);
}

module.exports = { ipDiff };
