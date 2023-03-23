// Your code here
const ipDiff = (firstIp, secondIp) => {
  const firstIpNums = firstIp.split('.');
  const secondIpNums = secondIp.split('.');
  if (firstIp === secondIp) return 0
  if (convertNumbers(secondIpNums) > convertNumbers(firstIpNums)) {
    return convertNumbers(secondIpNums) - convertNumbers(firstIpNums)
  } else {
    return convertNumbers(firstIpNums) - convertNumbers(secondIpNums)
  };
};

const convertNumbers = (numsToConvert) => {
  const convertedNums = numsToConvert.map((num) => Number(num));
  return convertedNums[3] + convertedNums[2] * 256 + convertedNums[1] * 256 * 256 + convertedNums[0] * 256 * 256 * 256
};

module.exports = { ipDiff };