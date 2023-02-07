function ipDiff(ip1, ip2) {
  const ip1Total = ipTotal(ip1);
  const ip2Total = ipTotal(ip2);

  return Math.abs(ip1Total - ip2Total);
}

function ipTotal(ip) {
  const multipliers = [256*256*256, 256*256, 256, 1];
  
  return ip.split('.').reduce((total, numberString, i) => {
    const integer = parseInt(numberString);

    total += integer*multipliers[i];

    return total;
  }, 0);
}

module.exports = { ipDiff };
